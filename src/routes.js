const express        = require('express')
const route          = express.Router()
const cors           = require('cors')
const linkController = require('./controllers/LinkController')  
const pageController = require('./controllers/PageController')

route.options('*', cors())

// Endpoints 
route.get('/:path', pageController.link)
route.get('/:path', linkController.findLinkByPath) // READ
route.delete('/:path', linkController.deleteLink) // DELETE
route.post('/', linkController.createLink) // CREATE

module.exports = route