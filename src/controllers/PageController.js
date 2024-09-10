const pages       = require('../pages')
const linkService = require('../services/LinkService')

module.exports = {
    link: async (request, response) =>{
        let path = request.params.path
        
        let pathValid = await linkService.getLinkByPath(path) 

        if (pathValid != '') {

            if (pathValid.lenght == 0) {
                response.status(404).send(`<h1>Achei não ó kkk</h1>`)
            } else {
                let link = pathValid[0]
                response.status(200).send(pages.link(link.path, link.name, link.content))
            }
            
        } else {
            response.status(404).send(`<h1>Achei não ó kkk</h1>`)
        }
        
    }
}