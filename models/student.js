'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  // Student.prototype.dataStudents()

  return Student;
};