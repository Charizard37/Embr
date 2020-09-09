module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIntrement: true
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING
    },
    {
      freezeTableName: true
    }
  );
};
