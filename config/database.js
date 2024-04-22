const { Sequelize } = require('sequelize')

let db

if (process.env.NODE_ENV == 'DEV') {
    db = new Sequelize(
        process.env.DATABASE_LOCAL,
        process.env.DB_USER_LOCAL,
        process.env.PASSWORD_LOCAL,
        {
            host: process.env.HOST_LOCAL,
            dialect: process.env.DIALECT
        }
    )
} else {
    db = new Sequelize(process.env.DATABASE_URL)
}

module.exports = db