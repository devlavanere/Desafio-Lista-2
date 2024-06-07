/*
7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km
*/

const prompt = require('prompt-sync')();

function alugarCarro(tipo, dias, distancia) {
    
    if(tipo === 'popular' && distancia <= 100) {
        return distancia * 0.20 + dias * 90;
    } else if(tipo === 'popular' && distancia > 100) {
        return distancia * 0.10 + dias * 90;
    } else if(tipo === 'luxo' && distancia <= 200) {
        return distancia * 0.30 + dias * 150;
    }
    return valor = distancia * 0.25 + dias * 150;
}

let tipo = prompt('Digite o tipo de veículo (popular ou luxo): ');
let dias = parseInt(prompt('Digite o numero de dias do aluguel: '));
let distancia = parseFloat(prompt('Digite a distancia percorrida em KM: '));

let valorDoAluguel = alugarCarro(tipo, dias, distancia);

console.log(`O tipo do veículo é ${tipo}, o número de dias são ${dias} e a distancia percorrida foi ${distancia}KM`);
console.log(`O valor total do aluguel é: R$ ${valorDoAluguel.toFixed(2)}`);
