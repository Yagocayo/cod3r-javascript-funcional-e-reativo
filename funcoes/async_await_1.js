function esperarPor(tempo = 2000) {
    return new Promise(function(resolve)  {
       /*   setTimeout(function() {
            console.log('executando promise...')
            resolve()*/
        setTimeout(() => resolve(), tempo)
                
        
    })
}

esperarPor(2000)
  .then(() => console.log('execultando promise1...'))
  .then(esperarPor)
  .then(() => console.log('execultando promise2...'))
  .then(esperarPor)
  .then(() => console.log('execultando promise3...'))
  .then(esperarPor)

  /*function executar() {
    esperarPor(1500)
    console.log('Async/await 1')
    esperarPor(1500)
    console.log('Async/await 2')
    esperarPor(1500)
    console.log('Async/await 3')
  }*/
  
function retornarValor(){
      return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
      })
}

async function retornarValorRapido(){
  return 20

}

async function executar() {
    let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`Async/await.. ${valor}`)

    await esperarPor(1500)
    console.log(`Async/await.. ${valor + 1}`)

    await esperarPor(1500)
    console.log(`Async/await.. ${valor + 2}`)

    return valor + 3
}

async function executarDeVerade() {
  const valor = await executar()
  console.log(valor)
}

executar().then(console.log)


// await faz a execução do codigo como de fosse um codigo sincrono
//por tras de todo await tem que ter uma promisse 