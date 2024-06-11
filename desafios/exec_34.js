/*
34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações.
*/

const prompt = require('prompt-sync')();

function multiplicarLinhasPorDiagonalPrincipal(matriz) {
    // Verifica se a matriz é 50x50
    if (matriz.length !== 50 || matriz[0].length !== 50) {
      console.error("A matriz deve ter dimensões 50x50.");
      return; // Sai da função se a matriz não tiver as dimensões corretas
    }
  
    // Multiplica cada linha pelo elemento da diagonal principal correspondente
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 50; j++) {
        // Multiplica o elemento da matriz pela diagonal principal da mesma linha
        matriz[i][j] *= matriz[i][i];
      }
    }
  
    // Retorna a matriz modificada
    return matriz;
  }
  
  // Leitura da matriz do usuário
  const matriz = [];
  console.log("Digite os elementos da matriz 50x50:");
  for (let i = 0; i < 50; i++) {
    matriz[i] = [];
    for (let j = 0; j < 50; j++) {
      matriz[i][j] = parseInt(prompt(`Digite o elemento [${i}][${j}]:`));
    }
  }
  
  // Multiplica as linhas pela diagonal principal
  const matrizModificada = multiplicarLinhasPorDiagonalPrincipal(matriz);
  
  // Mostra a matriz modificada
  console.log("Matriz modificada:");
  for (let i = 0; i < 50; i++) {
    console.log(matrizModificada[i].join(" "));
  }

//Utilizando numeros aleatorios
/*function multiplicarLinhasPorDiagonalPrincipal(matriz) {
    // Verifica se a matriz é 50x50
    if (matriz.length !== 50 || matriz[0].length !== 50) {
      console.error("A matriz deve ter dimensões 50x50.");
      return; // Sai da função se a matriz não tiver as dimensões corretas
    }
  
    // Multiplica cada linha pelo elemento da diagonal principal correspondente
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 50; j++) {
        // Multiplica o elemento da matriz pela diagonal principal da mesma linha
        matriz[i][j] *= matriz[i][i];
      }
    }
  
    // Retorna a matriz modificada
    return matriz;
  }

  const matriz = [];
  for (let i = 0; i < 50; i++) {
    matriz[i] = [];
    for (let j = 0; j < 50; j++) {
      matriz[i][j] = Math.random() * 100; // Gera números aleatórios entre 0 e 100
    }
  }
  
  const matrizModificada = multiplicarLinhasPorDiagonalPrincipal(matriz);
  console.log("Matriz modificada:", matrizModificada);*/

  