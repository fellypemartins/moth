const express        = require('express')
const route          = express.Router()
const cors           = require('cors')
const linkController = require('./controllers/LinkController')

route.options('*', cors())

// Endpoints
route.get('/:path', linkController.findLinkByPath) // READ
route.delete('/:path', linkController.deleteLink) // DELETE
route.post('/', linkController.createLink) // CREATE

module.exports = route