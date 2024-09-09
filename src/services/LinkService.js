const database = require('../database')

module.exports = {

    // Consultar Links
    readLinks: () => {
        return new Promise((resolve, reject) => {
            database.query('SELECT * FROM link', (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    },

     // Criar Link
     createLink: (path, name, content) => {
        return new Promise((resolve, reject) => {
            database.query('INSERT INTO link VALUES (?, ?, ?)', [path, name, content], (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    },

    // Deletar Link
    deleteLink: (path) => {
        return new Promise((resolve, reject) => {
            database.query(`DELETE FROM link WHERE path = '${path}'`, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    },

    // Consultar Link pelo path
    getLinkByPath: (path) => {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM link WHERE path = '${path}'`, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    }
}