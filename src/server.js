require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes/index')
const db = require('../config/database')

app.use(express.json())
app.use('/', routes)

db.authenticate()
    .then(() => console.log('DB connected!'))
    .catch((err) => console.log('error connect DB ------>>>', err))

app.listen(port, () => console.log('Server started on port: ' + port))
console.log('Hello developer')

// start task