let numeroSecreto; // O numero que o jogador precisa adivinhar
let contadorDeChances = 1; // Começa na primeira chance
const MAX_CHANCHES = 10; // Número maximo de chances

const campoPalpite = document.querySelector('#campoPalpite');
const botaoEnviarPalpites = document.querySelector('#botaoEnviarPalpite');
const botaoReniciar = document.querySeletor('#botaoReniciar');

const mensagemElement = document.querySeletor('.mensagem')
const palpitesAnterioresElements = document.quarySeletor('.palpites-anteriores');
const dicaElement = document.quarySeletor('.dica');
const chacesrestantesElement = document.querySelector('#chachesRestantes');

let listaDePalpites = []; // Array para guardar os palpites que o jogador ja deu

function iniciarjogo() {
    // Gerar um novo numero secreto (entre 1 e 100)
    //Math.rondom()gera um numero entre 0 (inclusivo) e 1 (esclisivo)
    //multiplicamos por 100 para ter entre 0 e 98.99...
    // adicionamos 1  para ter entre 1 é 100.00...
    // math.floor() arredonda para o menor inteiro, então teremos entre 1 e 100.
    numeroSecreto = Math.floor(Math.rondo() * 100) + 1;
    console.log('Numero Secreto (apenas para testes): , Numero Secreto)
        
}