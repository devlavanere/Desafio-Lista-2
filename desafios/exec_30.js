/*
30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.
*/

const prompt = require('prompt-sync')();

// Cria a matriz M(5,5)
let M = [];
for (let i = 0; i < 5; i++) {
    M[i] = [];
    for (let j = 0; j < 5; j++) {
        M[i][j] = parseInt(prompt(`Digite o elemento M[${i}][${j}]: `));
    }
}

// Vetores para somas das linhas (SL) e das colunas (SC)
let SL = [0, 0, 0, 0, 0];
let SC = [0, 0, 0, 0, 0];

// Calcula as somas das linhas e colunas
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        SL[i] += M[i][j];
        SC[j] += M[i][j];
    }
}

// Imprime a matriz
console.log("Matriz M(5,5):");
for (let i = 0; i < 5; i++) {
    console.log(M[i].join(' '));
}

// Imprime os vetores de somas
console.log("\nSomas das linhas (SL):");
console.log(SL.join(' '));

console.log("\nSomas das colunas (SC):");
console.log(SC.join(' '));

