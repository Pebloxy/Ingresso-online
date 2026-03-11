function comprar() {
    //verifica quantos ingressos o usuário deseja comprar e de qual tipo
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidadeDesejada = parseInt(document.getElementById("qtd").value);
    //verifica se há ingressos suficientes disponíveis do tipo especificado
    if (tipoIngresso == "pista") {                           
        comprarPista(quantidadeDesejada, tipoIngresso);
    } else if (tipoIngresso == "superior") {
        comprarSuperior(quantidadeDesejada, tipoIngresso);
    } else if (tipoIngresso == "inferior") {
        comprarInferior(quantidadeDesejada, tipoIngresso);
    } else {
        alert ("tipo invalido");
        return;
    }
}

function comprarPista(quantidadeDesejada, tipoIngresso) {
    let quantidadePista = parseInt (document.getElementById("qtd-pista").textContent);
    if (quantidadeDesejada > quantidadePista) {
        alert (`Quantiade Indisponível para o tipo ${tipoIngresso}`);
    } else if (quantidadeDesejada < 0) {
        alert ("A quantidade deve ser positiva");
    } else {
        quantidadePista -= quantidadeDesejada;
        document.getElementById("qtd-pista").textContent = quantidadePista;
    }
}

function comprarInferior(quantidadeDesejada, tipoIngresso) {
    let quantidadeInferior = parseInt (document.getElementById("qtd-inferior").textContent);
    if (quantidadeDesejada > quantidadeInferior) {
        alert (`Quantiade Indisponível para o tipo ${tipoIngresso}`);
    } else if (quantidadeDesejada < 0) {
        alert ("A quantidade deve ser positiva");
    } else {
        quantidadeInferior -= quantidadeDesejada;
        document.getElementById("qtd-inferior").textContent = quantidadeInferior;
    }
}

function comprarSuperior(quantidadeDesejada, tipoIngresso) {
    let quantidadeSuperior = parseInt (document.getElementById("qtd-superior").textContent);
    if (quantidadeDesejada > quantidadeSuperior) {
        alert (`Quantiade Indisponível para o tipo ${tipoIngresso}`);
    } else if (quantidadeDesejada < 0) {
        alert ("A quantidade deve ser positiva");
    } else {
        quantidadeSuperior -= quantidadeDesejada;
        document.getElementById("qtd-superior").textContent = quantidadeSuperior;
    }
}