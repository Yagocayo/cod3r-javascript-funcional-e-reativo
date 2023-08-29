 function gerarNumeros(min, max) {
    if(min > max){
       //destrocted   array
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
 }

 gerarNumeros(1, 60) 
   .then(num => num * 10)
   .then(numX10 => `O numero gerado foi ${numX10}`)
   .then(console.log)