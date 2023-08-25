let p = new Promise( function(resolve){
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})

/*p.then(function(valor) {
    console.log(valor)
})*/

//p.then((valor) => console.log(valor))

p.then(valor => console.log(valor))

function primeiroElemento(array) {
    return array[0]
}

function primeiraLetra(string) {
    return string[0]
}

const letraMinuscula = letra => letra.toLowerCase()

p
   .then(valor => valor[0])
   .then(primeiro => primeiro[0])
   .then(letra => letra.toLowerCase())
   .then(letraMinuscula => console.log(letraMinuscula))