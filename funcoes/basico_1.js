
//function Declaration
function bomDia() {
    console.log('bom dia')
}

bomDia()

//function expression
const boaTarde = function () {
    console.log('boa tarde!') 
}

boaTarde()

//function somar(a=0, b=0) {
//    return a + b
//} posso definir um numero para os parametros para nao dar um NaN

function somar(a, b) {
    return a + b
}

let resultado = somar(3, 4) // soma os parametros passados
console.log(resultado)

resultado = somar(3, 5, 6, 7)// javascript vai ignorar o restante dos parametros que não foram passados
console.log(resultado)

resultado = somar(3)
console.log(resultado)

/*revisão

//function Declaration
function bomDia() {
    console.log('bom dia')
}

bomDia()

//function expression
const boaTarde = function () {
    console.log('boa tarde!') 
}

boaTarde()

function somar(a, b) {
    return a + b
}

let resultado = somar(3, 4) // soma os parametros passados
console.log(resultado)

resultado = somar(3, 5, 6, 7)// javascript vai ignorar o restante dos parametros que não foram passados
console.log(resultado)

resultado = somar(3)
console.log(resultado)

*/
