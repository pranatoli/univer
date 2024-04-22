'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('teachers', [{
      first_name: 'Михаил',
      last_name: 'Дроздов',
      email: 'teach1@mail.ru',
    }], {});
    await queryInterface.bulkInsert('teachers', [{
      first_name: 'Иван',
      last_name: 'Морозов',
      email: 'teach2@mail.ru',
    }], {});
    await queryInterface.bulkInsert('teachers', [{
      first_name: 'Екатерина',
      last_name: 'Великая',
      email: 'teach3@mail.ru',
    }], {});
    await queryInterface.bulkInsert('teachers', [{
      first_name: 'Петр',
      last_name: 'Первый',
      email: 'teach4@mail.ru',
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('teachers', null, {});
  }
};
