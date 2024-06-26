const Sequilize = require('sequelize')
const db = require('../../config/database')
const Students = require('./students')
const Courses = require('./courses')

const StudentCourses = db.define('StudentCourses', {
    id: {
        type: Sequilize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    studentId: {
        type: Sequilize.INTEGER,
        references: {
            model: Students,
            key: 'id',
        }
    },
    courseId: {
        type: Sequilize.INTEGER,
        references: {
            model: Courses,
            key: 'id',
        }
    },
},
    {
        timestamps: false,
    })

module.exports = StudentCourses