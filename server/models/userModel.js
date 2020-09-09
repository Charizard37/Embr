module.exports = (sequelize, DataTypes) => {
  const User = sequilize.define(
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

  User.associate = (models) => {
    User.hasMany(models.Job, { onDelete: 'CASCADE' });
  };

  return User;
};
