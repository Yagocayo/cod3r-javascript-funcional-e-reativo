
const carrinho = [
    {nome: 'caneta',qtde: 10, preco: 7.99},
    {nome: 'impressora', qtde:0, preco: 649.50},
    {nome: 'caderno', qtde:4, preco: 27.10},
    {nome: 'lapis', qtde:3, preco: 5.82},
    {nome: 'tesoura', qtde:1, preco: 19.20},
]

//const qtdeMaiorQueZero = item => item.qtde > 0
//const itensValido = carrinho.filter(qtdeMaiorQueZero)
//console.log(itensValido)


const getNome = item => item.nome
const qtdeMaiorQueZero = item => item.qtde > 0
// const qtdeMaiorIgualAZero = item => item.qtde >= 0
// const qtdeMuitoGrande = item => item.qtde >= 1000

const nomeItensValido = carrinho
   .filter(qtdeMaiorQueZero)
   .map(getNome)
console.log(nomeItensValido)

Array.prototype.meuFilter = function(fn) {
    const novoArray = []
    for(let i = 0; i < this.length; i++) {
        if(fn(this[i], i, this)) {
            novoArray.push(this[i])
        }
    }

    return novoArray
}

const nomeItensValido2 = carrinho
   .meuFilter(qtdeMaiorQueZero)
   .map(getNome)

console.log(nomeItensValido2)