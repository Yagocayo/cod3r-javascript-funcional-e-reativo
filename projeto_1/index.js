const path = require('path')
const fn = require('./funcoes')

const caminho = path.join(__dirname,'..', 'dados', 'legendas')

const simbolos = [
  '.', '?', '-', ',','"','♪', '_', '<i>', '</i>', '/r', '[', ']', '(', ')','\r', '`', "'",
]

const separarPorLinhas = todoConteudo => todoConteudo.split('\n')
const separarPorPalavras = todoConteudo => todoConteudo.split(' ')



fn.lerDiretorio(caminho)
  .then(arquivos => fn.elementosTerninadosCom(arquivos, '.srt'))
  .then(arquivosSRT => fn.lerArquivos(arquivosSRT))
  .then(fn.mesclarElementos)
  .then(separarPorLinhas)
  .then(linhas => fn.removerSeVazio(linhas))
  .then(linhas => fn.removerSeIncluir(linhas, '-->'))
  .then(linhas => fn.removerSeApenasNumeros(linhas))
  .then (fn.removerSimbolos(simbolos))
  .then(mesclarElementos)
  .then(separarPorPalavras)
  .then(linhas => fn.removerSeVazio(linhas))
  .then(console.log)
