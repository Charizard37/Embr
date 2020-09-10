const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js');
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

const PORT = 3000;
const app = express();

// GitHub OAuth login
passport.use(
	new GitHubStrategy(
		{
			authorizationURL: 'https://github.com/login/oauth/authorize',
			clientID: '6656e9fb701948578da4',
			clientSecret: '9384e2860766938e1a35a573604381c23dcc5af0',
			callbackURL: 'http://localhost:3000/auth/github/callback',
		},
		(accessToken, refreshToken, profile, cb) => {
			console.log('profile', profile);
			console.log('accessToken', accessToken);
			// User.findOrCreate({ githubId: profile.id }, (err, user) => { ---> to create database object
			// return cb(err, user);
			cb(null, profile);
			// });
		}
	)
);

app.use(passport.initialize());

app.get('/ghlogin', passport.authenticate('github'));

app.get(
	'/auth/github/callback',
	passport.authenticate('github', {
		failureRedirect: '/login',
		failureFlash: true,
	}),
	(req, res) => {
		// auth successful need to redirect to home page
		res.send('Auth successful');
		res.redirect('/');
	}
);

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
  })
);
//db
const sequelize = require('./models/index.js');

//Test connection to database
sequelize
  .authenticate()
  .then(() => console.log('Database connected'))
  .catch((err) => console.log('Error: ' + err));

// sequelize.sync().then(() => {
//   console.log('sync');
// });

app.get('/', (req, res) => {
	res.redirect('/graphql');
});

app.use('*', function (req, res) {
	res.status(404);
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }
  };
  const errorObj = Object.assign(defaultErr, err);
  //   console.log('err: ', err);
  console.error('console error: ', err);
  return res.status(errorObj.status).send('Something broke!');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
