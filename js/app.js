function comprar() {
    //verifica quantos ingressos o usuário deseja comprar e de qual tipo
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidadeDesejada = document.getElementById("qtd").value;
    //verifica se há ingressos suficientes disponíveis do tipo especificado
    let quantidadeSobrando;
    if (tipoIngresso == "superior") {
        quantidadeSobrando = parseInt(document.getElementById("qtd-superior").textContent);
    } else if (tipoIngresso == "inferior") {
        quantidadeSobrando = parseInt(document.getElementById("qtd-inferior").textContent);
    } else if (tipoIngresso == "pista") {
        quantidadeSobrando = parseInt(document.getElementById("qtd-pista").textContent);
    } else {
        alert ("tipo invalido");
        return;
    }

    if (parseInt(quantidadeDesejada) > quantidadeSobrando) {
        alert (`Quantidade indisponível para ${tipoIngresso}`);
        return;
    } else {
        //subtrai a quantidade de ingressos disponíveis
        let resultadoDaCompra = quantidadeSobrando - quantidadeDesejada 
        let quantidadeSuperior = document.getElementById("qtd-superior");
        let quantidadeInferior = document.getElementById("qtd-inferior");
        let quantidadePista = document.getElementById("qtd-pista");
        
        if (tipoIngresso == "superior") {
        quantidadeSuperior.innerHTML = resultadoDaCompra;
      } else if (tipoIngresso == "inferior") {
        quantidadeInferior.innerHTML = resultadoDaCompra;
      } else if (tipoIngresso == "pista") {
        quantidadePista.innerHTML = resultadoDaCompra;
      }
    }
}