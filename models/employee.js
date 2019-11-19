'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: DataTypes.INTEGER,
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
    photo: {
      type: Sequelize.BLOB
    },
    employementDate: {
      type: Sequelize.DATE
    }
  }, {});
  Employee.associate = function(models) {
    // associations can be defined here
  };
  return Employee;
};