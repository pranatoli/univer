'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('students', [{
      email: 'example@mail.ru',
    }], {});
    await queryInterface.bulkInsert('students', [{
      email: 'example1@mail.ru',
    }], {});
    await queryInterface.bulkInsert('students', [{
      email: 'example2@mail.ru',
    }], {});
    await queryInterface.bulkInsert('students', [{
      email: 'example3@mail.ru',
    }], {});
    await queryInterface.bulkInsert('students', [{
      email: 'example4@mail.ru',
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {});
  }
};
