'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('grades', [{
      studentId: 1,
      courseId: 2,
      grade: 2,
    }], {});
    await queryInterface.bulkInsert('grades', [{
      studentId: 1,
      courseId: 1,
      grade: 7,
    }], {}); await queryInterface.bulkInsert('grades', [{
      studentId: 1,
      courseId: 1,
      grade: 5,
    }], {}); await queryInterface.bulkInsert('grades', [{
      studentId: 1,
      courseId: 3,
      grade: 8,
    }], {}); await queryInterface.bulkInsert('grades', [{
      studentId: 1,
      courseId: 3,
      grade: 9,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('grades', null, {});
  }
};
