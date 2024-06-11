/*
33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.
*/

function multiplicarDiagonalPrincipalPorMediaDiagonalSecundaria(matriz) {
    // Verifica se a matriz é 3x3
    if (matriz.length !== 3 || matriz[0].length !== 3) {
      console.error("A matriz deve ter dimensões 3x3.");
      return; // Sai da função se a matriz não tiver as dimensões corretas
    }
  
    // Calcula a soma dos elementos da diagonal secundária
    let somaDiagonalSecundaria = 0;
    for (let i = 0; i < 3; i++) {
      somaDiagonalSecundaria += matriz[i][2 - i]; // Acessa os elementos da diagonal secundária
    }
  
    // Calcula a média dos elementos da diagonal secundária
    let mediaDiagonalSecundaria = somaDiagonalSecundaria / 3;
  
    // Multiplica os elementos da diagonal principal pela média da diagonal secundária
    for (let i = 0; i < 3; i++) {
      matriz[i][i] *= mediaDiagonalSecundaria; // Multiplica os elementos da diagonal principal
    }
  
    // Retorna a matriz modificada
    return matriz;
  }
  
  const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const matrizModificada = multiplicarDiagonalPrincipalPorMediaDiagonalSecundaria(matriz);
  console.log("Matriz modificada:", matrizModificada);