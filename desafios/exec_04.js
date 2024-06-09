/*
4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.
*/
const prompt = require('prompt-sync')();

function formaTriangulo(reta_1, reta_2, reta_3) {

    // Verifica se o comprimento de cada lado e menor que a soma dos outros dois
    if (reta_1 < reta_2 + reta_3 && reta_2 < reta_1 + reta_3 && reta_3 < reta_1 + reta_2) {
        return `Forma um Triângulo`;
    }
    return `Não forma um Triãngulo`;
}

let reta_1 = parseFloat(prompt('Digite o comprimento da primeira reta: '));
let reta_2 = parseFloat(prompt('Digite o comprimento da primeira reta: '));
let reta_3 = parseFloat(prompt('Digite o comprimento da primeira reta: '));

console.log(formaTriangulo(reta_1, reta_2, reta_3));



