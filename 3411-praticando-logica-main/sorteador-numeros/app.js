


function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let numero = geraNumeroAleatorio(de, ate)
    console.log(`Numero Gerado no inicio do codigo: ${numero}`)
    let listaNumeros = []


    while (quantidade >= 1) {
        if (!listaNumeros.includes(numero)) {
            //console.log(`numeros antes dentro do if true: ${numero}`)
            numero = geraNumeroAleatorio(de, ate)
            //console.log(`numeros depois dentro do if true: ${numero}`)
            listaNumeros.push(numero);

        } else {
            listaNumeros.push(numero);
        }

        quantidade--;
    }
    alert(listaNumeros)

}

function geraNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




function reiniciar() {

}