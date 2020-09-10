module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'job',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      company: { type: DataTypes.STRING, allowNull: false },
      position: { type: DataTypes.STRING, allowNull: false },
      status: { type: DataTypes.STRING, allowNull: false },
      comments: { type: DataTypes.STRING, allowNull: true },
      phoneScreen: { type: DataTypes.BOOLEAN, allowNull: true },
      interview: { type: DataTypes.BOOLEAN, allowNull: true },
      takeHome: { type: DataTypes.BOOLEAN, allowNull: true },
      doubleDown: { type: DataTypes.BOOLEAN, allowNull: true },
    },
    {
      freezeTableName: true,
    }
  );
};

//make applied into a date?
