const { request, response } = require('express')
const userService = require('../services/UserService')

module.exports = {

    // Consultar Usuário pelo id
    findUserById: async (request, response) => {
        
        let json = { error: '', result: {} }
        let id   = request.params.id

        if (id) {

            let userValid = await userService.getUserById(id)

            if (userValid.lenght == 0) {
                json.error = 'Usuário não encontrado'
                response.status(404).json(json)

            } else {
                json.result = userValid[0]
                response.status(200).json(json)
            }

        } else {
            json.error = 'O id do usuario é obrigatório'
            response.status(404).json(json)
        }
    },

    // Criar Usuário
    createUser: async (request, response) => {

        let json = { error: '', result: {} }

        let name         = request.body.name
        let email        = request.body.email 
        let password     = request.body.password 
        let gender       = request.body.gender
        let birthday     = request.body.birthday
        let signature_id = request.body.signature_id

        if (name  != '' && email != '' && password != '') {

            let user = await linkService.createLink(name, email, password, gender, birthday, signature_id)

            json.result = {
                name:         name,
                email:        email,
                password:     password,
                gender:       gender,
                birthday:     birthday,
                signature_id: signature_id
            }

        } else {
            json.error = 'Não é possivel criar um usuário vazio'
        }

        response.status(200).json(json)
    },

    // Deletar Link
    deleteLink: async (request, response) => {

        let json = { error: '', result: '' }
        let id   = request.params.id

        if (id) {

            let userValid = await linkService.getLinkByPath(id)

            if (userValid.lenght == 0) {
                json.error = 'Usuário não encontrado'
                response.status(400).json(json)

            } else {
                await userService.deleteUser(id)
                json.result = `Usuário ${id} excluido com sucesso`
                response.status(200).json(json)
            }

        } else {
            json.error = 'O usuário é obrigatório'
            response.status(400).json(json)
        }
    }
}