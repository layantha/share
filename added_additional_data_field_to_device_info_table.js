('use strict');
const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.addColumn(
      'DEVICE_INFO', // Table name
      'ADDITIONAL_DATA', // New column name
      {
        type: Sequelize.STRING(2000), // Data type (adjust if necessary)
      }
    );
  },

  async down({ context: queryInterface }) {
    await queryInterface.removeColumn('DEVICE_INFO', 'ADDITIONAL_DATA');
  },
};
