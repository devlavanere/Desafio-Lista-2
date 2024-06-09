/*
3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.
*/
const prompt = require('prompt-sync')();

function distanciaPercorrida(distancia) {
    let precoPassagem;

    //Precifica a passagem com base na distancia maior ou menor que 200 km
    if(distancia <= 200) {
        precoPassagem = distancia * 0.50;
    } else {
        precoPassagem = distancia * 0.45;
    }

    return precoPassagem;
}

let distancia = parseFloat(prompt("Digite a distância a ser percorrida: "));

console.log(distanciaPercorrida(distancia));