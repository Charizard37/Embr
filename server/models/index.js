const Sequelize = require('sequelize');
const UserModel = require('./userModel');
const JobModel = require('./jobModel');

const sequelize = new Sequelize(
  'postgres://jblgpfps:OwDe8dXSE19gmzcYNPHHPMJ9aYKSeHT0@lallah.db.elephantsql.com:5432/jblgpfps',
  {
    dialect: 'postgres'
  }
);

const User = UserModel(sequelize, Sequelize);
const Job = JobModel(sequelize, Sequelize);

User.hasMany(Job);
Job.belongsTo(User);

sequelize.sync({ force: true }).then(() => {
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
