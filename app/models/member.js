// Example model


module.exports = (sequelize, DataTypes) => {

  const Member = sequelize.define('Member', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(128),
      field: 'email',
      allowNull : false,
      unique: true
    },
    fullName: {
      type: DataTypes.STRING(128),
      field: 'full_name',
      allowNull : false
    },
    fullNameYoungestChild: {
      type: DataTypes.STRING(128),
      field: 'full_name_youngest_child'
    },
    schoolYear: {
      type: DataTypes.STRING(4),
      field: 'school_year'
    },
    contactNumber: {
      type: DataTypes.STRING(11),
      field: 'contact_number'
    },
    committee: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    helper: {
      type: DataTypes.BOOLEAN,
      defaultValue: 'helper'
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
    testOnly: {
      type: DataTypes.BOOLEAN,
      field: 'test_only'
    },
    createdOn: {
      type: DataTypes.DATE,
      field: 'created_on'
    },
    updatedOn: {
      type: DataTypes.DATE,
      field: 'updated_on'
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

