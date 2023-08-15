/*explicando o reduce 

array.reduce(funcção, elemento)

[3, 2, 1, -3, 4, 7]

sempre vai receber um acumulador(primeiro parametro) e o elemento(segundo parametro)

caso a função seja somar 
sempre a resposta anterior passa a ser o proximo acumulador

(acumulador,elemento) 
ex: 0 + 3 = 3 -->
    3 + 2 = 5 -->
    5 + 1 = 6 -->
    6 + -3 = 3 -->
    3 + 4 = 7 -->
    7 + 7 = 14

sempre pegando o resultado anterior da operação da função(soma,subtracão e etc) com o proximo elemento do array

outro exemplo

[1, 2, 3, 4]

funçao vai ser para mutiplicar com o reduce 
quando nao e passado o primeiro parametro
se caso o acumulador nao for passado o primeiro elemento do array entra como acumulador 
função: (acumulador + elemento) => acumulador * elemento


ex: 1 * 2 = 2 -->
    2 * 3 = 6 -->
    6 * 4 = 24

exemplo passano o primeiro parametro sendo 1

ex: 1 * 1 = 1 -->
    1 * 2 = 2 -->
    2 * 3 = 6 -->
    6 * 4 = 24



o map transformar um array em um outro array com a mesma quantidade e indices modificando os elementos conforme a função passada

ja o filter ele filtra de um array para outro array passando apenas o que foi mandado pela função

reduce pode transformar o array em qualquer outra coisa o que vai determinar a tranformação vai ser a função

*/

const carrinho = [
    {nome: 'caneta',qtde: 10, preco: 7.99},
    {nome: 'impressora', qtde:0, preco: 649.50},
    {nome: 'caderno', qtde:4, preco: 27.10},
    {nome: 'lapis', qtde:3, preco: 5.82},
    {nome: 'tesoura', qtde:1, preco: 19.20},
]

const getTotal = item => item.qtde * item.preco
const somar = (acc, el) => acc + el


const totalGeral = carrinho
      .map(getTotal)
      .reduce(somar)// seguno parametro e o inicial

console.log(totalGeral)