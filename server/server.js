const path = require('path')
const express = require('express')

const weather = require('./routes/weather')


const cors = require('cors')
const server = express()

server.use(express.json())
server.use(cors({origin: 'http://localhost:3000'}))
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/weather', weather)

module.exports = server
