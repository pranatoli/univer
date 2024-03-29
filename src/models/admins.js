const Sequilize = require('sequelize')
const db = require('../../config/database')

const Admin = db.define('admin', {
    id: {
        type: Sequilize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    login: {
        type: Sequilize.STRING,
    },
    password: {
        type: Sequilize.STRING,
    },
},
    {
        timestamps: false,
    })

module.exports = Admin;