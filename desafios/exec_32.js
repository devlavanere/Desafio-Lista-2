/*
32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.
*/

const prompt = require('prompt-sync')();

let linhas = 4;
let colunas = 5;
let M = [];

//Leitura da matriz 12x13
for(let i = 0; i < linhas; i++) {
    let linha = [];
    for(let j = 0; j < colunas; j++) {
        let valor = parseInt(prompt(`Digites oelementos de M[${i}][${j}]: `))
        linha.push(valor);
    }
    M.push(linha);
}

console.log('\nMatriz original:');
for(let i = 0; i < linhas; i++) {
    console.log(M[i].join(' '));
}

//Modificando a matriz original
for(let i = 0; i < linhas; i++) {
    //Encontrar o maior valor em módulo da linha
    let maiorElementoModulo = Math.abs(M[i][0]);
    for(let j = 1; j < colunas; j++) {
        if(Math.abs(M[i][j] > maiorElementoModulo)) {
            maiorElementoModulo = Math.abs(M[i][j]);
        }
    }

    //Dividir cada elemento da linha pelo maior valor em módulo
    for(let j = 0; j < colunas; j++) {
        M[i][j] = M[i][j] / maiorElementoModulo;
    }
}

console.log('\nMatriz modificada:');
for(let i = 0; i < linhas; i++) {
    console.log(M[i].join(' '));
}




