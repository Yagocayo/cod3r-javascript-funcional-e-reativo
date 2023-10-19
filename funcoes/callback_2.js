const fs = require('fs') // bibliotecas dentro do node , fs , path
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt') //path.join junta os caminhos em um só colocando as barras da forma correta, e o ___dirname da o diretorio que está

function exibirConteudo(err, conteudo) {
    console.log(conteudo.toString())
}
console.log('inicio..')
fs.readFile(caminho,{}, exibirConteudo)
fs.readFile(caminho,(_, conteudo) => console.log(conteudo.toString()))
console.log('fim..')

//leitura do codígo de formar sincrona
console.log('inicio sincrono...')
const conteudo = fs.readFileSync(caminho)
console.log(conteudo.toString())
console.log('fim sincrono...')