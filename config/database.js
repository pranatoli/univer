const { Sequelize } = require('sequelize')

const db = new Sequelize(
    process.env.DATABASE_LOCAL,
    process.env.DB_USER_LOCAL,
    process.env.PASSWORD_LOCAL,
    {
        host: process.env.HOST_LOCAL,
        dialect: process.env.DIALECT
    }
)

module.exports = db