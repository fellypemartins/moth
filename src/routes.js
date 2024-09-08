const express = require('express')
const route   = express.Router()
const cors    = require('cors')

route.options('*', cors())

// Endpoints
route.get('/', (req, res) => res.json({frase: 'Sukuna é muito buxa'}))

module.exports = route