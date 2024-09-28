const database = require('../database')

module.exports = {

    // Criar Usuário
    createUser: (name, email, password, gender, birthday, signature_id) => {
        return new Promise((resolve, reject) => {
            database.query('INSERT INTO user VALUES (null, ?, ?, ?, ?, ?, ?)', [name, email, password, gender, birthday, signature_id], (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    },

    // Deletar Usuário
    deleteLink: (id) => {
        return new Promise((resolve, reject) => {
            database.query(`DELETE FROM user WHERE id = '${id}'`, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    },

    getUserById: (id) => {
        return new Promise((resolve, reject) => {
            database.query(`SELECT * FROM user WHERE id = '${id}'`, (err, result) => {
                if (err) {
                    return reject(err)
                }
                return resolve(result)
            })
        })
    }
}