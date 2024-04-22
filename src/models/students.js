const Sequilize = require('sequelize')
const db = require('../../config/database')
const Courses = require('./courses')

const Student = db.define('student', {
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    email: {
        type: Sequilize.STRING,
        allowNull: false,
    },
},
    {
        timestamps: false,
    })

module.exports = Student;