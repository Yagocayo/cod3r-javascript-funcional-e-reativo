/*
    Uma função pura é uma função em que o valor
de retorno é determinado APENAS por seua valores
de entrada, sem efeitos colaterais observaveis
*/


//função impura - PI é um valor externo!

const PI = 3.141592

function areaCirc(raio) {
    return raio * raio * PI
}

console.log(areaCirc(10))

// funão pura
function areaCircPura(raio, pi) {
    return raio * raio * pi 
}
console.log(areaCircPura(10, 3.14))
console.log(areaCircPura(10, 3.141592))
console.log(areaCircPura(10, Math.PI))