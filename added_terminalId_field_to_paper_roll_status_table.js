('use strict');
const { Sequelize } = require('/app/node_modules/sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.addColumn(
      'PAPER_ROLL_STATUS', // Table name
      'TERMINALID', // New column name
      {
        type: Sequelize.INTEGER, // Data type (adjust if necessary)
        references: {
          model: 'TERMINALS', // Referenced table
          key: 'id', // Referenced column (primary key of AppCode)
        },
        onDelete: 'SET NULL', // Optional behavior on AppCode deletion
        onUpdate: 'CASCADE', // Optional behavior on AppCode update
      }
    );
  },

  async down({ context: queryInterface }) {
    await queryInterface.removeColumn('PAPER_ROLL_STATUS', 'TERMINALID');
  },
};
