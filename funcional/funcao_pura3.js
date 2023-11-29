 /*
  Uma função pura é uma função em que o valor
de retorno é determinado APENAS por seus valores
de entrada, sem efeitos colaterais observaveis
*/
 
 let dtdeDeExecucoes = 0

// funcao pura! 
function somar (a, b){
    dtdeDeExecucoes++ //efeitos colaterais observaveis
    return a + b
}
console.log(dtdeDeExecucoes)
console.log(somar(61, 38))
console.log(somar(61, 38))
console.log(somar(61, 38))
console.log(somar(61, 38))
console.log(somar(61, 38))
console.log(dtdeDeExecucoes)