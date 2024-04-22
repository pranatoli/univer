'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('profiles', [{
      first_name: 'John',
      last_name: 'Doe',
      date_of_birth: '13-09-1998',
      adress: 'Витебск, Смоленская 13-1-113',
      studentId: 1,
    }], {});
    await queryInterface.bulkInsert('profiles', [{
      first_name: 'Дмитрий',
      last_name: 'Иванов',
      date_of_birth: '13-01-1991',
      adress: 'Витебск, Смоленская 1-3-7',
      studentId: 2,
    }], {});
    await queryInterface.bulkInsert('profiles', [{
      first_name: 'Екатерина',
      last_name: 'Петрова',
      date_of_birth: '19-09-1981',
      adress: 'Витебск, Ленина 13-1-113',
      studentId: 3,
    }], {});
    await queryInterface.bulkInsert('profiles', [{
      first_name: 'Анна',
      last_name: 'Сидорова',
      date_of_birth: '13-02-1978',
      adress: 'Витебск, Фрунзе 13-1-113',
      studentId: 4,
    }], {});
    await queryInterface.bulkInsert('profiles', [{
      first_name: 'Игорь',
      last_name: 'Рачинский',
      date_of_birth: '12-02-1995',
      adress: 'Витебск, Кирова 13-1-113',
      studentId: 5,
    }], {});
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('profiles', null, {});

  }
};
