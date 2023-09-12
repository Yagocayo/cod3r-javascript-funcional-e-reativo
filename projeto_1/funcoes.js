const fs = require('fs')

function lerDiretorio(caminho) {
    let arquivos = fs.readdirSync(caminho)
    console.log

}

module.exports = {
    lerDiretorio
}