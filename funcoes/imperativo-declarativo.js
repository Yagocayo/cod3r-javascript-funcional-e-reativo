/*
 IMPERATIVO ->

 foco foco no fluxo
 estados mutaveis
 como fazer
 maior quantidade de codigo
 baixo nivel de escalabilidade
 mais conhecido
 mais explicito

 DECLARATIVO ->

 foco na logica
 imutabilidade
 o que
 menor quantidade de codigo
 alto nivel de escalabilidade
 menos conhecido
 menos explicito
 
 */

//Paradigma imperativo

const notas = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0]
function media(notas) {
    let total = 0
    for(let i = 0; i < notas.length; i++) {
        total += notas[i]
    }
    return total / notas.length
}

const mediaTurma = media(notas)
console .log(`média é ${mediaTurma}`)

//Paradigma Declarativo

const notas1 = [8.7, 6.8, 7.7, 7.7, 9.2, 5.3, 8.0]

const somar =(a,b) => a + b
const dividir = (a,b) => a / b

const mediaTurma1 = dividir(
    notas.reduce(somar),
    notas.length
    )
console.log(`media é ${mediaTurma1}`)
 