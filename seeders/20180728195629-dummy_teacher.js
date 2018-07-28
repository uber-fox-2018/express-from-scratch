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
   return queryInterface.bulkInsert('Teachers', 
   [{first_name:"Edithe",last_name:"Kopec",gender:"Female",subject:"Environmental Tech",createdAt:new Date(),updatedAt: new Date()},
   {first_name:"Denis",last_name:"Ragge",gender:"Male",subject:"Analyst Programmer",createdAt:new Date(),updatedAt: new Date()},
   {first_name:"Dyane",last_name:"Asif",gender:"Female",subject:"Social Worker",createdAt:new Date(),updatedAt: new Date()},
   {first_name:"Bail",last_name:"Penwell",gender:"Male",subject:"Project Manager",createdAt:new Date(),updatedAt: new Date()},
   {first_name:"Bettine",last_name:"Gullefant",gender:"Female",subject:"Programmer II",createdAt:new Date(),updatedAt: new Date()}], {});
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
