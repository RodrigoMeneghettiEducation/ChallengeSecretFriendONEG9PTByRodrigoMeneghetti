//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
/*
Pré-Algoritmo

Declaração de Variáveis
    string nome

Entrada
    string nome 

Processamento
    receber entrada capturando a delaração string nome quando precionado botão "adicionar";
    validar entrada confirmando se entrada de string nome é válida (não nulo);
    se string nome for nulo mostrar alert("Informação inválida. Favor informar uma Nome");
    guardar string nome capturada em uma lista (array);
    limpar campo de entrada da string nome;
    sorterar randomicamente um dos nomes guardados na lista (array) quando precionado botão "sortear amigo";

Saída
    mostrar string nome recebida em tela;
    mostrar nome sorteado na tela com uma mensagem de "seu amigo secreto é: nome.";

*/

//Algorítmo do jogo do amigo secreto.

// Lista para armazenar os nomes digitados
let listaDeAmigos = [];

// Função para exibir texto em um elemento da página e a ser narrado
function textoNaTela(tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 }); 
}

// Função para narrar os títulos da página
function narrarMensagem(){
    textoNaTela('h1', 'AMIGO SECRETO');
    textoNaTela('h2', 'Digite o nome dos seus amigos');
}

// Executa a função para narrar os títulos da página
narrarMensagem();

// Função para adicionar um nome à lista
// Verificar se nome é válido e limpar campo de entrada de nomes
function adicionarAmigo() {
    let campoDeEntrada = document.querySelector('#amigo');
    let nome = campoDeEntrada.value.trim();

    if (nome.trim() === '' || !/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
        alert('Digite um nome válido! Somente letras e acentos são permitidos.');
        return;
    }

    listaDeAmigos.push(nome);
    atualizarListaAmigos();

    campoDeEntrada.value = '';
    campoDeEntrada.focus();
}

// Função para atualizar visualmente a lista de amigos
function atualizarListaAmigos() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';

    listaDeAmigos.forEach(function(amigo) {
        let linha = document.createElement('li');
        linha.textContent = amigo;
        lista.appendChild(linha);
    });
}

// Função para sortear um nome aleatório
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert('Adicione pelo menos um nome antes de sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    let listaResultado = document.querySelector('#resultado');
    listaResultado.innerHTML = `<li>🎲 Sorteando amigo...</li>`;

    // Revelar nome de amigo sorteado e narrar resultado
    setTimeout(() => {
        let mensagem = `E o amigo sorteado é ${amigoSorteado}! Parabéns!`;
        listaResultado.innerHTML = `<li>${mensagem}</li>`;
        responsiveVoice.speak(mensagem, 'Brazilian Portuguese Female', { rate: 1.2 });
    },500);
}
