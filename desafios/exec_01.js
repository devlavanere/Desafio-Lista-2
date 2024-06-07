/*
1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.
*/
const prompt = require('prompt-sync')();

function calcularTempoDeVidaPerdido(cigarrosPorDia, anosFumando) {
    //calcula o total de cigarros fulmados
    let totalCigarros = cigarrosPorDia * 365 * anosFumando;

    //calcula tempo de perdido em minutos
    let tempoPerdidoMinutos = totalCigarros * 10;

    //coverte o tempo de vida para dias
    let tempoPerdidoDias = tempoPerdidoMinutos / (24 * 60);

    return tempoPerdidoDias;
}

// Obtém as entradas do usuário
let cigarrosPorDia = parseInt(prompt("Quantidade de cigarros fulmados por dia: "));
let anosFumando = parseInt(prompt("Quantos anos você fulmou: "));

//calcula tempo de vida perdido
let tempoPerdidoDias = calcularTempoDeVidaPerdido(cigarrosPorDia, anosFumando);

//imprime resultado no console
console.log(`Você perderá aproximadamente: ${tempoPerdidoDias.toFixed(2)} dias de vida devido o hábito de fumar.`);