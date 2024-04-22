const Sequilize = require('sequelize')
const db = require('../../config/database')
const Teachers = require('./teachers')

const Course = db.define('course', {
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    Id: {
        type: Sequilize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequilize.STRING,
        allowNull: false,
    },
    teacherId: {
        type: Sequilize.INTEGER,
        references: {
            model: Teachers,
            key: 'id',
        }
    },
},
    {
        timestamps: false,
    })

module.exports = Course;