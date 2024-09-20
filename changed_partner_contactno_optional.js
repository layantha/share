('use strict');
const { Sequelize } = require('/app/node_modules/sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.changeColumn('PARTNERS', 'contactNo', {
      type: Sequelize.STRING(15),
      allowNull: true,
    });
  },
  async down({ context: queryInterface }) {
    await queryInterface.changeColumn('PARTNERS', 'contactNo', {
      type: Sequelize.STRING(15),
      allowNull: false,
    });
  },
};
