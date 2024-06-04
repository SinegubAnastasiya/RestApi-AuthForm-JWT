const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const router = require('./controller/user.controller')

const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(bodyParser.json())
app.use(cookieParser())

app.use('/user', router)

app.use((error, req, res, next) => res.send(error.message))

module.exports = app