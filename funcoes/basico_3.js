 //arrow function
 
const felizNatal = () => console.log('feliz natal!')
felizNatal() // quando nao tiver parametro usar parenteses ex: () =>


const saudacao = nome => `Fala ${nome}, blz!!!`
console.log(saudacao('maria'))
//quando tiver apenas 1 parametro pode se tirar os parenteses ex:  (nome) =>, nome =>,   se tiver mais de 1 parametro e nescessario colocar os parenteses

//const somar = numeros => { usando array
const somar = (...numeros) => { //usando rest e tranformando em array 
    console.log(Array.isArray(numeros))
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}

//console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) usando array
console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(10))


// this funciona diferente com function arrow e function declarada

Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}
Array.prototype.primeiro = function() {
    console.log(this[0])
}

const numeros = [-333, 1, 2, 3, 500]
numeros.ultimo()
numeros.primeiro()

const subtrair = (a, b) => a - b
console.log(subtrair(4, 1))

/*
 //arrow function
 
const felizNatal = () => console.log('feliz natal!')
felizNatal() // quando nao tiver parametro usar parenteses ex: () =>


const saudacao = nome => `Fala ${nome}, blz!!!`
console.log(saudacao('maria'))
//quando tiver apenas 1 parametro pode se tirar os parenteses ex:  (nome) =>, nome =>,   se tiver mais de 1 parametro e nescessario colocar os parenteses

//const somar = numeros => { usando array
const somar = (...numeros) => { //usando rest e tranformando em array 
    console.log(Array.isArray(numeros))
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}

//console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) usando array
console.log(somar(1, 2, 3))
console.log(somar(1, 2, 3, 4, 5, 6))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

const potencia = base => exp => Math.pow(base, exp)
console.log(potencia(2)(10))


// this funciona diferente com function arrow e function declarada

Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}
Array.prototype.primeiro = function() {
    console.log(this[0])
}

const numeros = [-333, 1, 2, 3, 500]
numeros.ultimo()
numeros.primeiro()

const subtrair = (a, b) => a - b
console.log(subtrair(4, 1))
*/