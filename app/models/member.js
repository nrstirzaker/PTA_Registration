// Example model


module.exports = (sequelize, DataTypes) => {

  const Member = sequelize.define('Member', {
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: (models) => {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return Member;
};

