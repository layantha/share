'use strict';
const { Sequelize, DataTypes } = require('/app/node_modules/sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.addColumn(
      'PARTNERS', // Table name
      'LOGO', // New column name
      {
        type: Sequelize.TEXT, // Data type (adjust if necessary)
      }
    );
  },

  async down({ context: queryInterface }) {
    await queryInterface.removeColumn('PARTNERS', 'LOGO');
  },
};
