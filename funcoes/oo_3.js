function Produto(nome, preco, desc = 0.50) {
    this.nome = nome 
    this.preco = preco
    this.desc = _desc

    this.precoFinal = function() {
        return this.preco * (1 - this._desc)
    }

}

Produto.prototype.log = function() {
    console.log(`Nome: ${this._nome} Preco: R$${this.preco}`)
    
}
Object.defineProperty(Produto.prototype, 'desc', {
    get: function() {
        return this._desc
    }
} )

Object.defineProperty(Produto.prototype, 'descString', {
    get: function() {
        return `${this._desc * 100}%`
    }
} )


const p1 = new Produto('caneta', 10)
console.log(p1.nome)
p1.log()

const p2 = new Produto('geladeira', 3000)
console.log(p2.preco)
console.log(p2.precoFinal())
console.log(p2.desc)
console.log(p2.descString)