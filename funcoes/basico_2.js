
//function declaration
function bomDia() {
    console.log('Bom dia!')
}
//function expression (função anonima) normalmente ao se usar function expression se usa uma função anonima sem dar parametros
const boaTarde = function () {
    console.log('Boa tarde!')
}

// 01 passar uma função como parametro para outra função
function executarQualquerCoisa(fn) {
    if(typeof fn === 'function') {
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

//1 == '1' = true compara valores
//1 === '1' = false compara valores e tipos 

//02 retornar uma função a partir de uma outra função

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}
const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const pot34 = potencia(3)(4)
console.log(pot34)

/* revisão
//function declaration
function bomDia() {
    console.log('Bom dia!')
}
//function expression (função anonima)
const boaTarde = function () {
    console.log('Boa tarde!')
}

// 01 passar uma função como parametro para outra função
function executarQualquerCoisa(fn) {
    if(typeof fn === 'function') {
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)

//02 retornar uma função a partir de uma outra função

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}
const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))
const pot34 = potencia(3)(4)
console.log(pot34)
 */
