module.exports = (sequelize, DataTypes) => {
  const Job = sequilize.define(
    'job',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIntrement: true
      },
      company: DataTypes.STRING,
      position: DataTypes.STRING,
      applied: DataTypes.BOOLEAN,
      pnoneScreen: DataTypes.BOOLEAN,
      interview: DataTypes.BOOLEAN,
      takeHome: DataTypes.BOOLEAN,
      doubleDown: DataTypes.BOOLEAN
    },
    {
      freezeTableName: true
    }
  );

  Job.associate = (models) => {
    Job.belongsTo(models.user);
  };

  return Job;
};
