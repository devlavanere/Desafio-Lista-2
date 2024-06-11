/*
31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.
*/

const prompt = require('prompt-sync')();

// Ler o valor de A
const A = parseInt(prompt("Digite o valor de A: "));

// Cria a matriz V (30x30) e lê seus valores
let V = [];
for (let i = 0; i < 30; i++) {
    V[i] = [];
    for (let j = 0; j < 30; j++) {
        V[i][j] = parseInt(prompt(`Digite o elemento V[${i}][${j}]: `), 10);
    }
}

// Contar quantos valores iguais a A estão na matriz V
let countA = 0;
for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
        if (V[i][j] === A) {
            countA++;
        }
    }
}

// Criar a matriz X contendo todos os elementos de V diferentes de A
let X = [];
for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
        if (V[i][j] !== A) {
            X.push(V[i][j]);
        }
    }
}

// Mostrar os resultados
console.log(`Quantidade de valores iguais a ${A} na matriz V: ${countA}`);

console.log("\nElementos da matriz V diferentes de A na matriz X:");
console.log(X);
