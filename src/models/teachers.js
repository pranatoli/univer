const Sequilize = require('sequelize')
const db = require('../../config/database')

const Teacher = db.define('teacher', {
    id: {
        type: Sequilize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    first_name: {
        type: Sequilize.STRING,
        allowNull: false,
    },
    last_name: {
        type: Sequilize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequilize.STRING,
        allowNull: false,
    },
},
    {
        timestamps: false,
    })

module.exports = Teacher;