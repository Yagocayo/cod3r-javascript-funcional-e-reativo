/*//sempre que colocamos o this.algumacoisa, voce esta colocando esse atributo dentro da instancia gerada, sempre que chama o new a partir da função vai ser criada uma instancia e essa instacia vai ser devolvida como resposta da chamada do new, e para acessar os atributos usamos a palavra this.

function Produto(nome, preco, desc = 0.50) {
    this.nome = nome 
    this.preco = preco
    this.desc = desc

    this.precoFinal = function() {
        return this.preco * (1 - this.desc)
    }

}

const p1 = new Produto('caneta', 10)
console.log(p1.nome)

const p2 = new Produto('geladeira', 3000)
console.log(p2.preco)
console.log(p2.precoFinal())*/


//sempre que colocamos o this.algumacoisa, voce esta colocando esse atributo dentro da instancia gerada, sempre que chama o new a partir da função vai ser criada uma instancia e essa instacia vai ser devolvida como resposta da chamada do new, e para acessar os atributos usamos a palavra this.

function Produto(nome, preco, desc = 0.50) {
    this.nome = nome 
    this.preco = preco
    this.desc = desc

    this.precoFinal = function() {
        return this.preco * (1 - this.desc)
    }

}

const p1 = new Produto('caneta', 10)
console.log(p1.nome)

const p2 = new Produto('geladeira', 3000)
console.log(p2.preco)
console.log(p2.precoFinal())

