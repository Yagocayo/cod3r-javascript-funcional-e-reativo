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


const getNome = item => item.nome
console.log(carrinho.map(getNome))


const getTotal = item => item.qtde * item.preco
const totais = carrinho.map(getTotal)
console.log(totais)

Array.prototype.meuMap = function(fn) {
    const mapped = []
    for(let i = 0; i < this.length; i++) {
        mapped.push()
        fn(this[i], i,this)
            
    }
}
