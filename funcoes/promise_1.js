/*
let a = 1
console.log(a)

let p = new Promise( function(resolve){
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})*/

/*p.then(function(valor) {
    console.log(valor)
})*/

//p.then((valor) => console.log(valor))

//p.then(valor => console.log(valor))

/*function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}
*/
const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise( function(resolve){
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})


   /*.then(valor => valor[0])
   .then(primeiro => primeiro[0])
   .then(letra => letra.toLowerCase())
   .then(letraMinuscula => console.log(letraMinuscula))*/

   .then(primeiroElemento)
   .then(primeiroElemento)
   .then(letraMinuscula)
   .then(console.log)