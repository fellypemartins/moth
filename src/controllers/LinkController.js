const { request, response } = require('express')
const linkService = require('../services/LinkService')

module.exports = {

    // Consultar Link pelo path
    findLinkByPath: async (request, response) => {

        let json = { error: '', result: {} }
        let path = request.params.path

        if (path) {

            let linkValid = await linkService.getLinkByPath(path)

            if (linkValid.lenght == 0) {
                json.error = 'Link não encontrado'
                response.status(404).json(json)

            } else {
                json.result = linkValid[0]
                response.status(200).json(json)
            }
        } else {
            json.error = 'O path do link é obrigatório'
            response.status(404).json(json)
        }
    },

    // Criar Link
    createLink: async (request, response) => {

        let json = { error: '', result: {} }

        let path    = request.body.path
        let name    = request.body.name
        let content = request.body.content

        if (path != '' && name != '' && content != '') {

            let link = await linkService.createLink(path, name, content)

            json.result = {
                path:    path,
                name:    name,
                content: content
            }

        } else {
            json.error = 'Não é possivel criar um link vazio'
        }

        response.status(200).json(json)
    },

    // Deletar Link
    deleteLink: async (request, response) => {

        let json = { error: '', result: '' }
        let path = request.params.path

        if (path) {

            let linkValid = await linkService.getLinkByPath(path)

            if (linkValid.lenght == 0) {
                json.error = 'Link não encontrado'
                response.status(400).json(json)

            } else {
                await linkService.deleteLink(path)
                json.result = `Link ${path} excluido com sucesso`
                response.status(200).json(json)
            }

        } else {
            json.error = 'O path é obrigatório'
            response.status(400).json(json)
        }
    }
}