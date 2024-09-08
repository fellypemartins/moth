require('dotenv').config({ path: 'variaveis.env' })

const express    = require('express')
const cors       = require('cors')
const bodyParser = require('body-parser')
const routes     = require('./routes.js')
const server     = express()

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(cors())
server.use('/', routes)

server.listen(process.env.PORT_SERVER, () => {
    console.log(`Servidor aberto em http://localhost:${process.env.PORT_SERVER}`)
})
