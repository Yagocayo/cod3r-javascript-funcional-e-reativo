// Funções que operam em outras funçoes,
// tomando-as como argumentos ou retornando-as,
// são chamadas de higher-order functions.

function executar(fn, ...params){
    return function (textoInicial) {
        return `${textoInicial} ${fn(...params)}!`
    }
}

function somar (a, b, c) {
    return a + b + c
}

function multiplicar (a, b) {
    return a * b 
}

const r1 = executar(somar, 4, 5, 6)('o resultado da soma é')
const r2 = executar(multiplicar, 30, 40 )('o resultado da multiplicação é')

console.log(r1)
console.log(r2)