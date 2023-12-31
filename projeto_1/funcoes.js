const fs = require('fs')
const path = require('path')

function lerDiretorio(caminho) {
    return new Promise((resolve,reject) => {
        try {
            let arquivos = fs.readdirSync(caminho)
        arquivos = arquivos.map(arquivo => path.join(caminho,arquivo))
        resolve(arquivos)
        } 
        catch(e) {
            reject(e)
        }
    })
}
function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try{
            const conteudo = fs.readFileSync (caminho, {encoding: 'utf-8'})
            resolve(conteudo.toString())
        } catch(e) {
            reject(e)
        }
    }) 
}
function lerArquivos(caminhos){
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}

function  elementosTerninadosCom (array, padraoTextual) {
    return array.filter(el => el.endsWith(padraoTextual))
}

function removerSeVazio(array) {
    return array.filter(el => el.trim())
}
function removerSeIncluir(array, padraoTextual) {
    return array.filter(el => !el.includes(padraoTextual))
}
function removerSeApenasNumeros(array) {
    return array.filter(el => {
        const num = parseInt(el.trim())
        return num !== num
    } )
}
function removerSimbolos(simbolos){
    return function(array) {
        return array.map(el => {
            let textoSemSimbolos= el
            simbolos.forEach(simbolos => {
                textoSemSimbolos = textoSemSimbolos.split(simbolos).join('')
            })
            return textoSemSimbolos
        })
    }
}

const mesclarElementos = array => array.join(' ')

module.exports = {
    lerDiretorio,
    lerArquivo,
    lerArquivos,
    elementosTerninadosCom,
    removerSeVazio,
    removerSeIncluir,
    removerSeApenasNumeros,
    removerSimbolos,
    mesclarElementos
    
}