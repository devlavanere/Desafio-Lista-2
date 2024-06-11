/*
23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.
*/

function criarMatrizIdentidade(tamanho) {
    // Inicializa uma matriz vazia
    let matriz = [];
  
    // Itera sobre as linhas da matriz
    for (let i = 0; i < tamanho; i++) {
      // Cria uma nova linha na matriz
      matriz[i] = [];
  
      // Itera sobre as colunas da matriz
      for (let j = 0; j < tamanho; j++) {
        // Se a linha e a coluna forem iguais, a célula recebe 1 (diagonal principal)
        // Caso contrário, a célula recebe 0
        matriz[i][j] = (i === j) ? 1 : 0;
      }
    }
  
    // Retorna a matriz identidade criada
    return matriz;
  }
  
  function imprimirMatriz(matriz) {
    // Itera sobre as linhas da matriz
    for (let i = 0; i < matriz.length; i++) {
      // Imprime a linha atual, separando os elementos por um espaço
      console.log(matriz[i].join(' '));
    }
  }
  
  // Cria uma matriz identidade 7x7
  let matrizIdentidade = criarMatrizIdentidade(7);
  
  // Imprime a mensagem "Matriz Identidade 7x7:"
  console.log("Matriz Identidade 7x7:");
  
  // Imprime a matriz identidade criada
  imprimirMatriz(matrizIdentidade);

/*
// j=0 j=1 j=2 j=3 j=4 j=5 j=6    
    [1, 0,  0,  0,  0,  0,  0], //i = 0
    [0, 1,  0,  0,  0,  0,  0]  //i = 1
    [0, 0,  1,  0,  0,  0,  0]  //i = 2
    [0, 0,  0,  1,  0,  0,  0]  //i = 3
    [0, 0,  0,  0,  1,  0,  0]  //i = 4
    [0, 0,  0,  0,  0,  1,  0]  //i = 5
    [0, 0,  0,  0,  0,  0,  1]  //i = 6


//Para dioganal principal ser 1
 i = 0 e j = 0 -> 1 / i = 1 e j = 1 -> 1 / i = 2 e j = 2 -> 1 / i = 3 e j = 3 -> 1 /
 i = 4 e j = 4 -> 1 / i = 5 e j = 5 -> 1 / i = 6 e j = 6 -> 1
 */





 