module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'job',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      company: DataTypes.STRING,
      position: DataTypes.STRING,
      applied: DataTypes.BOOLEAN,
      pnoneScreen: { type: DataTypes.BOOLEAN, allowNull: true },
      interview: { type: DataTypes.BOOLEAN, allowNull: true },
      takeHome: { type: DataTypes.BOOLEAN, allowNull: true },
      doubleDown: { type: DataTypes.BOOLEAN, allowNull: true }
    },
    {
      freezeTableName: true
    }
  );
};
