/*
24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.
*/

function contarNegativosPorLinha(matriz) {
  // Obtém o número de linhas e colunas da matriz
  const linhas = matriz.length;
  const colunas = matriz[0].length;

  // Cria um vetor para armazenar o número de negativos em cada linha
  const vetorC = [];

  // Itera sobre cada linha da matriz
  for (let i = 0; i < linhas; i++) {
    // Inicializa um contador para os negativos da linha atual
    let contador = 0;

    // Itera sobre cada coluna da linha atual
    for (let j = 0; j < colunas; j++) {
      // Se o elemento da matriz for negativo, incrementa o contador
      if (matriz[i][j] < 0) {
        contador++;
      }
    }

    // Adiciona o contador de negativos da linha atual ao vetorC
    vetorC.push(contador);
  }

  // Retorna o vetor com o número de negativos em cada linha
  return vetorC;
}
  
//Matriz M
const matrizM = [
  [1, -2, 3, -4, 5, -6, 7, -8],
  [-1, 2, -3, 4, -5, 6, -7, 8],
  [1, 2, 3, 4, 5, 6, 7, 8],
  [-1, -2, -3, -4, -5, -6, -7, -8],
  [1, -2, 3, 4, -5, 6, 7, -8],
  [-1, 2, -3, 4, 5, -6, 7, 8],
];

const vetorC = contarNegativosPorLinha(matrizM);

console.log("Vetor C:", vetorC);





