'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Students', [{first_name:"Orland",last_name:"Matchett",gender:"Male",createdAt:new Date(),updatedAt: new Date()},
    {first_name:"Cordey",last_name:"Aldwick",gender:"Female",createdAt:new Date(),updatedAt: new Date()},
    {first_name:"Prentice",last_name:"Cosgreave",gender:"Male",createdAt:new Date(),updatedAt: new Date()},
    {first_name:"Early",last_name:"Docherty",gender:"Male",createdAt:new Date(),updatedAt: new Date()},
    {first_name:"Elisabetta",last_name:"Rettie",gender:"Female",createdAt:new Date(),updatedAt: new Date()}], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
