module.exports = {
    link: (path, name, url) => {
        return `
                <!DOCTYPE html>
                <html lang="pt-br">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Casulo ${path}</title>
                </head>
                <body>
                    <img src="">
                    <table>
                        <thead>
                            <th>Nome</th>
                            <th>Link</th>
                        </thead>
                        <tbody>
                            <td>${name}</td>
                            <td>${url}</td>
                        </tbody>
                    </table>
                </body>
                </html>`
    } 
}