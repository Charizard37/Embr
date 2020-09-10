module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'job',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      company: DataTypes.STRING,
      position: DataTypes.STRING,
      applied: DataTypes.BOOLEAN,
      phoneScreen: { type: DataTypes.BOOLEAN, allowNull: true },
      interview: { type: DataTypes.BOOLEAN, allowNull: true },
      takeHome: { type: DataTypes.BOOLEAN, allowNull: true },
      doubleDown: { type: DataTypes.BOOLEAN, allowNull: true },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      freezeTableName: true,
    }
  );
};
