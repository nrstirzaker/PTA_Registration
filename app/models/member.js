// Example model


module.exports = (sequelize, DataTypes) => {

  const Member = sequelize.define('Member', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      field: 'email',
      allowNull : false,
      unique: true
    },
    fullName: {
      type: DataTypes.STRING,
      field: 'full_name',
      allowNull : false
    },
    fullNameYoungestChild: {
      type: DataTypes.STRING,
      field: 'full_name_youngest_child'
    },
    schoolYear: {
      type: DataTypes.STRING,
      field: 'school_year'
    },
    contactNumber: {
      type: DataTypes.STRING,
      field: 'contact_number'
    },
    committee: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    helper: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    specificEvent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'specific_event'
    },
    secondHandUniform: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field: 'second_hand_uniform'
    },
    information: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      field:'information'
    },
    agreedPrivacyPolicy: {
      type: DataTypes.BOOLEAN,
      field: 'agreed_privacy_policy'
    },
    createdOn: {
      type: DataTypes.DATE,
      field: 'created_on'
    }
  }, {
      freezeTableName: true, // Model tableName will be the same as the model name
      timestamps: false,
      underscored: true,
      classMethods: {
        associate: (models) => {
          // example on how to add relations
          // Article.hasMany(models.Comments);
        }
      }
    });

  return Member;
};

