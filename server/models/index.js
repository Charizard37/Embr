const Sequelize = require('sequelize');
const UserModel = require('./userModel');
const JobModel = require('./jobModel');
const faker = require('faker');
const _ = require('lodash');

const sequelize = new Sequelize(
  'postgres://volcmzja:siylZtNDjfceVNQeqqSzq6e7kSeWGS0J@lallah.db.elephantsql.com:5432/volcmzja',
  {
    dialect: 'postgres',
    logging: false,
  }
);

const User = UserModel(sequelize, Sequelize);
const Job = JobModel(sequelize, Sequelize);

User.hasMany(Job);
Job.belongsTo(User);

sequelize.sync({ alter: true }).then(() => {
  console.log('db created');
});
// const models = {
//   User: sequelize.import('./userModel'),
//   Job: sequelize.import('./jobModel')
// };

// Object.keys(models).forEach((key) => {
//   if ('associate' in models[key]) {
//     models[key].associate(models);
//   }
// });

module.exports = sequelize;

// export default models;
