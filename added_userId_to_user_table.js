('use strict');

const Sequelize = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.addColumn(
      'USERS', // Table name
      'ADUSERID', // New column name
      {
        type: Sequelize.STRING(10), // Specify the appropriate data type
      }
    );
  },

  async down({ context: queryInterface }) {
    await queryInterface.removeColumn('USERS', 'ADUSERID');
  },
};
