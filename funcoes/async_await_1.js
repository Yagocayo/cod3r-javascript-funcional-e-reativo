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
  
  executar()

  async function executar() {
    await esperarPor(1500)
    console.log('Async/await 1')
    await esperarPor(1500)
    console.log('Async/await 2')
    await esperarPor(1500)
    console.log('Async/await 3')
  }
  executar()