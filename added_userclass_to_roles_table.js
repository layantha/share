('use strict');

const Sequelize = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.addColumn(
      'ROLES', // Table name
      'ADUSERCLASSID', // New column name
      {
        type: Sequelize.STRING(10), // Specify the appropriate data type
        // allowNull: false, // Modify as needed
      }
    );
  },

  async down({ context: queryInterface }) {
    await queryInterface.removeColumn('ROLES', 'ADUSERCLASSID');
  },
};
