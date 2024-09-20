('use strict');
const { Sequelize } = require('/app/node_modules/sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.changeColumn('RESOURCES', 'NAME', {
      type: Sequelize.STRING(50),
    });
  },

  async down({ context: queryInterface }) {
    await queryInterface.changeColumn('RESOURCES', 'NAME', {
      type: Sequelize.STRING(20),
    });
  },
};
