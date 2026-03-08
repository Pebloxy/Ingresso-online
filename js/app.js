let quantidadeSuperior = document.getElementById("qtd-superior").value;
let quantidadeInferior = document.getElementById("qtd-inferior").value;
let quantidadePista = document.getElementById("qtd-pista").value;

function comprar() {
    //verifica quantos ingressos o usuário deseja comprar e de qual tipo
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    alert(tipoIngresso);
    let quantidadeDesejada = document.getElementById("qtd").value;
    alert(quantidadeDesejada);
    //verifica se há ingressos suficientes disponíveis do tipo especificado
    let quantidadeSobrando;
    if (tipoIngresso == "superior") {
        quantidadeSobrando = parseInt (quantidadeSuperior);
    } else if (tipoIngresso == "inferior") {
        quantidadeSobrando = parseInt (quantidadeInferior);
    } else if (tipoIngresso == "fila") {
        quantidadeSobrando = parseInt (quantidadePista);
    } else {
        alert ("tipo invalido");
        return;
    }

    if (parseInt(quantidadeDesejada) > quantidadeSobrando) {
        alert (`Qantidade indisponível para ${tipoIngresso}`);
        return;
    }

    //subtrai a quantidade de ingressos disponíveis

}