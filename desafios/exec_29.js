/*
29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.
*/

const prompt = require('prompt-sync')();

//Prenchendo matriz com entrada do usuário
const linhas = 5;
const colunas = 5;
let matriz = [];

// Função para ler a matriz M(5,5)
function lerMatriz() {
  for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
      matriz[i][j] = parseInt(prompt(`Digite o elemento M[${i + 1}][${j + 1}]: `));
    }
  }
}

// Função para calcular a soma da linha 4 (índice 3)
function somaLinhas(linha) {
  let soma = 0;
  for (let j = 0; j < colunas; j++) {
    soma += matriz[linha][j];
  }
  return soma;
}

// Função para calcular a soma da coluna 2 (índice 1)
function somaColuna(coluna) {
  let soma = 0;
  for (let i = 0; i < linhas; i++) {
    soma += matriz[i][coluna];
  }
  return soma;
}

// Função para calcular a soma da diagonal principal
function somaDiagonal() {
  let soma = 0;
  for (let i = 0; i < linhas; i++) {
    soma += matriz[i][i];
  }
  return soma;
}

// Função para calcular a soma de todos os elementos da matriz
function somaTotalElementos() {
  let soma = 0;
  for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
      soma += matriz[i][j];
    }
  }
  return soma;
}

// Função para imprimir a matriz
function imprimirMatriz() {
    console.log("Matriz M(5,5):");
    for (let i = 0; i < linhas; i++) {
        console.log(matriz[i].join(' '));
    }
}

// Leitura da matriz
lerMatriz();

// Cálculo das somas
let somaLinha4 = somaLinhas(3);
let somaLinha2 = somaColuna(1);
let somaDiagonalPrincipal = somaDiagonal();
let somaTotal = somaTotalElementos();

// Impressão dos resultados
imprimirMatriz();
console.log(`Soma da linha 4: ${somaLinha4}`);
console.log(`Soma da coluna 2: ${somaLinha2}`);
console.log(`Soma da diagonal principal: ${somaDiagonalPrincipal}`);
console.log(`Soma de todos os elementos da matriz: ${somaTotal}`);

/*const M = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
  ];

//Inicializa variáveis para soma
let somaLinha4 = 0;
let somaLinha2 = 0;
let somaDiagonalPrincipal = 0;
let somaTotal = 0;

// Calcula as somas
for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {

        //Soma linha 4
        if(i === 3) {
            somaLinha4 += M[i][j];
        }

        //Soma coluna 2
        if(j === 1) {
            somaLinha2 += M[i][j];
        }

        //Soma Diagonal Principal
        if(i === j) {
            somaDiagonalPrincipal += M[i][j];
        }

        //Soma total
        somaTotal += M[i][j];

    }
}

//Imprime Matriz
console.log('Matriz M:');
for(let i = 0; i < 5; i++) {
    console.log(M[i]);
}

console.log('********************************');

//Imprime as Somas
console.log(`Soma da linha 4: ${somaLinha4}`);
console.log(`Soma da linha 2: ${somaLinha2}`);
console.log(`Soma Diagonal Principal: ${somaDiagonalPrincipal}`);
console.log(`Soma Total: ${somaTotal}`);*/

//Matriz 5x5 preenchida com números aleatórios entre 1 e 100, calculará as somas especificadas e exibirá a matriz e os resultados no console.
/*const linhas = 5;
const colunas = 5;
let matriz = [];

// Função para ler a matriz M(5,5)
function lerMatriz() {
  for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
      matriz[i][j] = Math.floor(Math.random() * 100) + 1;
    }
  }
}

// Função para calcular a soma da linha 4 (índice 3)
function somaLinhas(linha) {
  let soma = 0;
  for (let j = 0; j < colunas; j++) {
    soma += matriz[linha][j];
  }
  return soma;
}

// Função para calcular a soma da coluna 2 (índice 1)
function somaColuna(coluna) {
  let soma = 0;
  for (let i = 0; i < linhas; i++) {
    soma += matriz[i][coluna];
  }
  return soma;
}

// Função para calcular a soma da diagonal principal
function somaDiagonal() {
  let soma = 0;
  for (let i = 0; i < linhas; i++) {
    soma += matriz[i][i];
  }
  return soma;
}

// Função para calcular a soma de todos os elementos da matriz
function somaTotalElementos() {
  let soma = 0;
  for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
      soma += matriz[i][j];
    }
  }
  return soma;
}

// Função para imprimir a matriz
function imprimirMatriz() {
    console.log("Matriz M(5,5):");
    for (let i = 0; i < linhas; i++) {
        console.log(matriz[i].join(' '));
    }
}

// Leitura da matriz
lerMatriz();

// Cálculo das somas
let somaLinha4 = somaLinhas(3);
let somaLinha2 = somaColuna(1);
let somaDiagonalPrincipal = somaDiagonal();
let somaTotal = somaTotalElementos();

// Impressão dos resultados
imprimirMatriz();
console.log(`Soma da linha 4: ${somaLinha4}`);
console.log(`Soma da coluna 2: ${somaLinha2}`);
console.log(`Soma da diagonal principal: ${somaDiagonalPrincipal}`);
console.log(`Soma de todos os elementos da matriz: ${somaTotal}`);*/