/*
função map
[1, 2, 3, 4].map (função)
                transforma
resultado de uma função map sempre vai ter o mesmo tamanho do array original 
exemplo se tiver 10 posições o resultado sera 10 posições so que trans formado os resultados conforme a função passada 

ex:array 
 

vai pegar o array e transformar em outro array com o mesmo tamanho atraves da função map passada

função vai ser (elemento * 2)
[3, 2, 4, 5, 6, 3]

fn = el * 2 de transformação

3 * 2 = [6]  
2 * 2 = [4]  
4 * 2 = [8]  
5 * 2 = [10]
6 * 2 = [12]
3 * 2 = [6]

resultado novo array com o mesmo tamanho e mapeado
[6, 4, 8, 10, 12, 6]



*/



const nums = [1, 2, 3, 4, 5]
const dobro = (n) => n * 2 
console.log(nums.map(dobro))



const nums2 = [1, 2, 3, 4, 5]
const dobro2 = (n, i) => n * 2 + i
console.log(nums2.map(dobro2))



const nums1 = [1, 2, 3, 4, 5]
const dobro1 = (n, i, a) => n * 2 + i + a.length
console.log(nums1.map(dobro1))



const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa' ]
const primeiraLetra = texto => texto[0]
const letras = nomes.map(primeiraLetra)
console.log(nomes, letras)



const carrinho = [
    {nome: 'caneta',qtde: 10, preco: 7.99},
    {nome: 'impressora', qtde:0, preco: 649.50},
    {nome: 'caderno', qtde:4, preco: 27.10},
    {nome: 'lapis', qtde:3, preco: 5.82},
    {nome: 'tesoura', qtde:1, preco: 19.20},
]


/*const getNome = item => item.nome
console.log(carrinho.map(getNome))


const getTotal = item => item.qtde * item.preco
const totais = carrinho.map(getTotal)
console.log(totais)*/

Array.prototype.meuMap = function(fn) {
    const novoArray = []
    for(let i = 0; i < this.length; i++) {
        const resultado = fn (this[i], i, this)
        novoArray.push(resultado)
    } 
    return novoArray
}

const getNome = item => item.nome
console.log(carrinho.meuMap(getNome))


const getTotal = item => item.qtde * item.preco
const totais = carrinho.meuMap(getTotal)
console.log(resultado)