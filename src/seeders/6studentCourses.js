'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('StudentCourses', [{
      studentId: 1,
      courseId: 2,
    }], {});
    await queryInterface.bulkInsert('StudentCourses', [{
      studentId: 1,
      courseId: 5,
    }], {});
    await queryInterface.bulkInsert('StudentCourses', [{
      studentId: 1,
      courseId: 7,
    }], {});
    await queryInterface.bulkInsert('StudentCourses', [{
      studentId: 2,
      courseId: 2,
    }], {});
    await queryInterface.bulkInsert('StudentCourses', [{
      studentId: 2,
      courseId: 3,
    }], {});
    await queryInterface.bulkInsert('StudentCourses', [{
      studentId: 3,
      courseId: 1,
    }], {});
    await queryInterface.bulkInsert('StudentCourses', [{
      studentId: 4,
      courseId: 4,
    }], {});
    await queryInterface.bulkInsert('StudentCourses', [{
      studentId: 4,
      courseId: 5,
    }], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('StudentCourses', null, {});
  }
};
