
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let resultado = document.getElementById("resultado")
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = geraNumeroAleatorio(de, ate);
        while (sorteados.includes(numero)) {
            numero = geraNumeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    let btnReiniciar = document.getElementById("btn-reiniciar");
    btnReiniciar.setAttribute("class", "container__botao");


}

function geraNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




function reiniciar() {
    let btnReiniciar = document.getElementById('btn-reiniciar')
    btnReiniciar.setAttribute('class', 'container__botao-desabilitado');

    let quantidade = document.getElementById('quantidade');
    quantidade.value = '';
    let de = document.getElementById('de');
    de.value = '';
    let ate = document.getElementById('ate');
    ate.value = '';

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>'

}