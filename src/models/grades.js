const Sequilize = require('sequelize')
const db = require('../../config/database')
const Courses = require('./courses')
const Students = require('./students')

const Grade = db.define('grade', {
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
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
    grade: {
        type: Sequilize.INTEGER,
        allowNull: false,
    }
},
    {
        timestamps: false,
    })

module.exports = Grade;