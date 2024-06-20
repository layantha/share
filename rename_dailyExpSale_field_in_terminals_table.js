('use strict');
const { Sequelize } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.renameColumn(
      'TERMINALS',
      'DAILYEXPSALE',
      'EXPECTEDSALE'
    );
  },

  async down({ context: queryInterface }) {
    await queryInterface.renameColumn(
      'TERMINALS',
      'EXPECTEDSALE',
      'DAILYEXPSALE'
    );
  },
};
