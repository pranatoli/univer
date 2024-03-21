const Sequilize = require('sequelize')
const db = require('../../config/database')
const Students = require('./students')

const Profile = db.define('profile', {
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
    date_of_birth: {
        type: Sequilize.DATE,
        allowNull: false,
    },
    adress: {
        type: Sequilize.STRING,
        allowNull: false,
    },
    student_id: {
        type: Sequilize.INTEGER,
        references: {
            model: Students,
            key: 'id',
        }
    },
},
    {
        timestamps: false,
    })

module.exports = Profile;