('use strict');

const Sequelize = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    // Step 1: Drop the existing unique constraint
    await queryInterface.removeConstraint('PARTNERS', 'uk-partner');

    // Step 3: Create the new unique constraint
    await queryInterface.addConstraint('PARTNERS', {
      fields: ['NAME', 'DELETEDREC'],
      type: 'unique',
      name: 'uk-partner',
    });
  },

  async down({ context: queryInterface }) {
    // Step 1: Remove the new unique constraint
    await queryInterface.removeConstraint('PARTNERS', 'uk-partner');

    // Step 3: Recreate the old unique constraint
    await queryInterface.addConstraint('PARTNERS', {
      fields: ['EMAIL', 'DELETEDREC'],
      type: 'unique',
      name: 'uk-partner', // Name of the original unique constraint
    });
  },
};
