const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConeudo(err, conteudo) {
    console.log(conteudo.toString())
}
console.log('inicio..')
fs.readFile(caminho,{}, exibirConeudo)
fs.readFile(caminho,(_, conteudo) => console.log(conteudo.toString()))
console.log('fim..')

//leitura do codígo de formar sincrona
console.log('inicio sincrono...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('fim sincrono...')