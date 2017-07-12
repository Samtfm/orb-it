module.exports = (sequelize, DataTypes) => {
  const Orb = sequelize.define('Orb', {
    title: DataTypes.STRING,
    content: {
      type: DataTypes.JSON,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        // sample code 
        // TodoItem.belongsTo(models.Todo, {
        //   foreignKey: 'todoId',
        //   onDelete: 'CASCADE',
        // });
      }
    }
  });
  return Orb;
};
