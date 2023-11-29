/*
Diz-se que uma limguagem de programação possui
funções de primeira classe quando funçoes nessa 
limguagem são tratadas como qualquer outra variável.
*/

const x = 3
const y = function (txt) {
    return `Esse é o texto: ${txt}`
}
const z = () => console.log('Zzzzzzzz')

console.log(x)
console.log(y('Olá'))
z()