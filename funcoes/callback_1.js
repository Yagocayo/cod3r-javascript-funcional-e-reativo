function exec(fn, a, b) {
    return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w - z)
const subtrair = (w, z) => w - z


exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal,182, 27)

const r = exec(subtrair, 50, 25)
console.log(r)

//1 exemplo de como pode ser feito

//const callback = () => console.log('setInterval...') 
//setInterval(callback, 1000) 

//2 exemplo de como pode ser feito

//setInterval(() => console.log('setInterval...'), 1000)

//3 exemplo de como pode ser feito

setInterval(function (){
    console.log("setInterval")
},1000)


/* qual a ideia do callback é passar uma função como parametro  para outra função e depois essa função vai ser chamada de volta ex de callback voce faz uma requisição paa o servidor, a uma chamada http servigor do google,amazon e etc e depois de um tempo vem a resposta. 
esse e um conceito de programação reativa que quando acontecer um evento voce chama a função de volta 
função chamda quando algum evento acontecer*/