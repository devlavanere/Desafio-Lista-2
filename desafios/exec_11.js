/*
11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.
*/

const prompt = require('prompt-sync')();

function calculaPA(primeiroTermo, razao) {
    let termos = []; //Array para armazenar os termos da PA
    let somaTermos = 0;
    //Loop para calcular os 10 primeiros termos
    for(let i = 0; i < 10; i++) {
        let termo = primeiroTermo + razao * i;
        termos.push(termo); //Adiciona o termo calculado ao array

        somaTermos += termos[i];
    }

    console.log(`Os 10 primeiros termos da PA são: ${termos.join(", ")}`);

    console.log(`A soma dos termos da PA é: ${somaTermos}`);
}

let primeiroTermo = parseInt(prompt('Digite o primeiro termo da PA: '));
let razao = parseInt(prompt('Digite a razão da PA: '));

calculaPA(primeiroTermo, razao);
