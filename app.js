let listaDeNumerosSorteados = [];
let numeroLimiteDaLista = 10;
let numeroSecreto = gerarNumeroAleatorio();
let numeroTentativa = 1;

exibirMensagemInicial();

function exibirConteudo(tag, texto) {

    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak(texto, "Brazilian Portuguese Female", {ratio:1.2});

}

function verificarChute(){

    let chute = document.querySelector("input").value;
    
    if(chute == numeroSecreto){

        let textoTentativa = numeroTentativa > 1 ? "tentativas" : "tentativa";
        let mensagem = `Parabéns! Você descobriu o número secreto em ${numeroTentativa} ${textoTentativa}!`;

        exibirConteudo("h1", "Acertou!");
        exibirConteudo("p", mensagem);

        document.getElementById("reiniciar").removeAttribute("disabled");

    } else if(chute < numeroSecreto){

        exibirConteudo("p", "Errado, o número secreto é maior");

    } else if(chute > numeroSecreto){

        exibirConteudo("p", "Errado, o número secreto é menor");

    }

    numeroTentativa++;
    limparCampo();

}

function gerarNumeroAleatorio(){

    let quantidadeRegistoLista = listaDeNumerosSorteados.length;
    let numeroEscolhido = parseInt(Math.random() * numeroLimiteDaLista + 1);

    if(quantidadeRegistoLista == numeroLimiteDaLista){

        listaDeNumerosSorteados = [];
        alert("Todos os números foram sorteados, reiniciando a lista!");

    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){

        return gerarNumeroAleatorio();

    } else {

        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;

    }

}

function limparCampo(){

    chute = document.querySelector("input");
    chute.value = " ";

}

function reiniciarJogo(){

    numeroSecreto = gerarNumeroAleatorio();
    numeroTentativa = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);

}

function exibirMensagemInicial(){

    exibirConteudo("h1", "Jogo do número secreto");

    let mensagemIntervaloNumeros = `Digite um número entre 1 e ${numeroLimiteDaLista}`;
    exibirConteudo("p", mensagemIntervaloNumeros);

}