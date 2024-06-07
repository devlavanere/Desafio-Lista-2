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

//Usando função

// Função para ler uma matriz 12x13
function readMatrix(rows, cols) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            let value = parseFloat(prompt(`Digite o valor para M[${i}][${j}]: `));
            row.push(value);
        }
        matrix.push(row);
    }
    return matrix;
}

// Função para encontrar o maior valor em módulo de uma linha
function findMaxAbsValue(row) {
    let maxAbsValue = Math.abs(row[0]);
    for (let i = 1; i < row.length; i++) {
        if (Math.abs(row[i]) > maxAbsValue) {
            maxAbsValue = Math.abs(row[i]);
        }
    }
    return maxAbsValue;
}

// Função para dividir cada elemento de uma linha pelo maior valor em módulo
function normalizeRow(row) {
    let maxAbsValue = findMaxAbsValue(row);
    return row.map(value => value / maxAbsValue);
}

// Função para normalizar a matriz
function normalizeMatrix(matrix) {
    return matrix.map(row => normalizeRow(row));
}

// Função para exibir a matriz
function printMatrix(matrix) {
    matrix.forEach(row => {
        console.log(row.join(' '));
    });
}

// Leitura da matriz 12x13
const rows = 12;
const cols = 13;
let matrix = readMatrix(rows, cols);

console.log("\nMatriz original:");
printMatrix(matrix);

// Normalização da matriz
let normalizedMatrix = normalizeMatrix(matrix);

console.log("\nMatriz normalizada:");
printMatrix(normalizedMatrix);


