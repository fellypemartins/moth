const express        = require('express')
const route          = express.Router()
const cors           = require('cors')
const linkController = require('./controllers/LinkController')  
const userController = require('./controllers/UserController') 

route.options('*', cors())

// Endpoints Links
route.get('/link/:path', linkController.findLinkByPath) // READ
route.delete('/link/:path', linkController.deleteLink)  // DELETE
route.post('/link', linkController.createLink)          // CREATE

// Endpoits Users
route.get('/user/:id', userController.findUserById)  // READ
route.delete('/user/:id', userController.deleteLink) // DELETE
route.post('/user', userController.createUser)       // CREATE

module.exports = route