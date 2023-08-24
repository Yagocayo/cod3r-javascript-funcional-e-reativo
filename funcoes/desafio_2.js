const carrinho = [
    {nome: 'caneta',qtde: 10, preco: 7.99, fragil: true},
    {nome: 'impressora', qtde:1, preco: 649.50, fragil: true},
    {nome: 'caderno', qtde:4, preco: 27.10, fragil: false},
    {nome: 'lapis', qtde:3, preco: 5.82, fragil: false},
    {nome: 'tesoura', qtde:1, preco: 19.20, fragil: true},
]

// filter, map, reduce

//1. fragil: true
//2. qdte * preco -> total
//3. media totais

/*const media = carrinho
    .filter(item => item.fragil) //vai filtrar os verdadeiros e falsos
    .map(item => item.qtde * item.preco)// vai transformar o item fazeno a mutiplicação
    .reduce((acc, el) => {
        const novaQtde = acc.qtde + 1
        const novoTotal = acc.total + el
        console.log(acc, el)
        return {
            qtde: novaQtde ,
            total: novoTotal,
            media: novoTotal / novaQtde
        }

    }, {qtde: 0, total: 0, media:0})
    .media

console.log(media)*/

Array.prototype.meuReduce = function(fn, inicial) {
    let acc = inicial
    for(let i = 0; i < this.length; i++) {
        if(!acc && i === 0) {
            acc = this[i]
        } else {
            acc = fn(acc, this[i], i, this)
        }
    
    }

    return acc
}

const fragil = item => item.fragil
const getTotal = item => item.qtde * item.preco
const getMedia = (acc, el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el
    return {
        qtde: novaQtde,
        total: novoTotal,
        media: novoTotal / novaQtde
    }
}

const mediaInicial = {qtde: 0, total: 0, media: 0 }

const media = carrinho
      .filter(fragil)
      .map(getTotal)
      .meuReduce(getMedia, mediaInicial )
      .media

console.log(`A média é ${media}!`)
