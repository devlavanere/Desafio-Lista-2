/*
15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.
*/
const prompt = require('prompt-sync')();

function arrayNumeros(numeros) {
    for(let i = 0; i < 10; i++) {
        let numero = parseInt(prompt('Digite o numero: '));
        if(numero % 2 === 0) {
            numeros.push(`Posição de armazenamento: ${i} = Numero: ${numero}`);
        }
    }
    console.log('Lista contendo numeros pares digitados e sua posição no array: ')
    return numeros;
}

console.log(arrayNumeros([]));

        

