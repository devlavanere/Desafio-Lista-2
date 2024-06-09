/*
25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente.
*/

function somarColunasMatriz(matriz) {
  const numLinhas = matriz.length;
  const numColunas = matriz[0].length;

  // Cria um array vazio para armazenar a soma de cada coluna
  const somaColunas = [];

  // Itera sobre as colunas da matriz
  for (let j = 0; j < numColunas; j++) {
    // Inicializa a soma da coluna atual como 0
    somaColunas[j] = 0;

    // Itera sobre as linhas da matriz
    for (let i = 0; i < numLinhas; i++) {
      // Soma o valor da célula atual à soma da coluna correspondente
      somaColunas[j] += matriz[i][j];
    }
  }

  // Retorna o array com a soma de cada coluna
  return somaColunas;
}

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
];

const somaColunas = somarColunasMatriz(matriz);
console.log("Soma de cada coluna:", somaColunas); 













