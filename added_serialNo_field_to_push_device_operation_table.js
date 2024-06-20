('use strict');
const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.addColumn(
      'PUSHDEVICE_OPERATION', // Table name
      'SERIALNO', // New column name
      {
        type: Sequelize.STRING(30), // Data type (adjust if necessary)
      }
    );
  },

  async down({ context: queryInterface }) {
    await queryInterface.removeColumn('PUSHDEVICE_OPERATION', 'SERIALNO');
  },
};
