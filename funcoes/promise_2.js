/*setTimeout ( function() {
    console.log('execultando callback...')

    setTimeout ( function() {
        console.log('execultando callback...')

        setTimeout(function() {
            console.log('execultando callback')
        },2000)
    },2000)

},2000)*/

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve)  {
        setTimeout(function() {
            console.log('executando promise...')
            resolve('vish..')

        }, tempo)
    })
}
esperarPor(3000).then(texto => console.log(texto ))
