const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js');

const PORT = 3000;
const app = express();

// //db
// const sequelize = require('./config.js');

// //Test connection to database
// sequelize
//   .authenticate()
//   .then(() => console.log('Database connected'))
//   .catch((err) => console.log('Error: ' + err));

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
