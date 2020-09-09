const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js');

/* -------------------------------------------------------- GH OAuth -------------------------------------------------------- */
const passport = require('passport');
const GitHubStrategy = require('passport-github').Strategy;

const PORT = 3000;
const app = express();

// GitHub OAuth login
passport.use(
	new GitHubStrategy(
		{
			clientID: 'Iv1.291c1e312abeaef8',
			clientSecret: '5d912e93791f74f1d8482198dae1d47c0d73a8b8',
			callbackURL: 'https://2b0b4f892122.ngrok.io/auth/github/callback',
		},
		(accessToken, refreshToken, profile, cb) => {
			console.log(profile);
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
	passport.authenticate('github', { session: false }),
	(req, res) => {
		// auth successful not sure where to redirect with graphQl
		res.send('Auth successful');
	}
);

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

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
		message: { err: 'An error occurred' },
	};
	const errorObj = Object.assign(defaultErr, err);
	//   console.log('err: ', err);
	console.error('console error: ', err);
	return res.status(errorObj.status).send('Something broke!');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
