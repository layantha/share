('use strict');
const { Sequelize } = require('/app/node_modules/sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.changeColumn('PARTNERS', 'email', {
      type: Sequelize.STRING(50),
      allowNull: true,
    });
  },
  async down({ context: queryInterface }) {
    await queryInterface.changeColumn('PARTNERS', 'email', {
      type: Sequelize.STRING(50),
      allowNull: false,
    });
  },
};
