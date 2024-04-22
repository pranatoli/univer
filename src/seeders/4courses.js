'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', [{
      course_name: 'English A1',
      description: 'изучение английского на начальом уровне',
      teacherId: 1,
    }], {});
    await queryInterface.bulkInsert('courses', [{
      course_name: 'English A2',
      description: 'изучение английского, после курса А1',
      teacherId: 1,
    }], {});
    await queryInterface.bulkInsert('courses', [{
      course_name: 'English В1',
      description: 'изучение английского на повышеном уровне',
      teacherId: 2,
    }], {});
    await queryInterface.bulkInsert('courses', [{
      course_name: 'English В2',
      description: 'изучение английского на уровне достаточном для вхождения в IT',
      teacherId: 2,
    }], {});
    await queryInterface.bulkInsert('courses', [{
      course_name: 'Front-end',
      description: 'изучение программирования',
      teacherId: 3,
    }], {});
    await queryInterface.bulkInsert('courses', [{
      course_name: 'Back-end',
      description: 'изучение программирования',
      teacherId: 3,
    }], {});
    await queryInterface.bulkInsert('courses', [{
      course_name: 'Spanish',
      description: 'изучение испанского языка',
      teacherId: 4,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
