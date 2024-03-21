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
    student_id: {
        type: Sequilize.INTEGER,
        references: {
            model: Students,
            key: 'id',
        }
    },
    course_id: {
        type: Sequilize.INTEGER,
        references: {
            model: Courses,
            key: 'id',
        }
    },
    email: {
        type: Sequilize.STRING,
        allowNull: false,
    }
},
    {
        timestamps: false,
    })

module.exports = Grade;