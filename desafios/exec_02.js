/*
2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h
, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

const prompt = require('prompt-sync')();

function velocidadeCarro(velocidade) {
    let velocidadePermitida = 80;
    let diferencaVelocidade = velocidade - velocidadePermitida;
    let valorMulta = diferencaVelocidade * 5;

    //Verifica se a velocidade e maior que 80 km/h
    if(velocidade > velocidadePermitida) { 
        return `Você foi multado por ultrapassar a velocidade permitida de 80km/h no valor de R$${valorMulta.toFixed(2)}`;
    } else {
        return `Sua velocidade é ${velocidade}km/h. Boa viagem! `;
    }
}

let velocidade = parseFloat(prompt("Informe a sua velocidade: "));

console.log(velocidadeCarro(velocidade));


