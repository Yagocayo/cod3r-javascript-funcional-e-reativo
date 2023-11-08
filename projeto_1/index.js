const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname,'..', 'dados', 'legendas')

const simbolos = [
  '.', '?', '-', ',','"','♪', '_', '<i>', '</i>', '/r', '[', ']', '(', ')','\r', '`', "'",
]
const mesclarConteudos = conteudos => conteudos.join('\n')

fn.lerDiretorio(caminho)
  .then(arquivos => fn.elementosTerninadosCom(arquivos, '.srt'))
  .then(arquivosSRT => fn.lerArquivos(arquivosSRT))
  .then(mesclarConteudos)
  .then(todoConteudo => todoConteudo.split('\n'))
  .then(linhas => fn.removerSeVazio(linhas))
  .then(linhas => fn.removerSeIncluir(linhas, '-->'))
  .then(linhas => fn.removerSeApenasNumeros(linhas))
  .then (fn.removerSimbolos(simbolos))
  .then(mesclarConteudos)
  .then(separarPorPalavras)
  .then(console.log)
