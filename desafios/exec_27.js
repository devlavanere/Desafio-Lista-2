/*
27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.
*/

// Função para multiplicar a matriz M pelo valor A e armazenar os resultados em um vetor V
function multiplicarMatrizPorValor(M, A) {
    // Verifica se a matriz M tem as dimensões corretas
    if (M.length !== 6 || M[0].length !== 6) {
      console.error("A matriz M deve ter dimensões 6x6.");
      return null; // Retorna null para indicar erro
    }
  
    // Inicializa o vetor V com 36 elementos
    const V = []; 
  
    // Itera sobre cada elemento da matriz M
    let k = 0; // Índice do vetor V
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 6; j++) {
        // Multiplica o elemento da matriz M pelo valor A
        V[k] = M[i][j] * A;
        k++;
      }
    }
  
    // Retorna o vetor V com os valores multiplicados
    return V;
  }
  
  // Exemplo de uso
  const M = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
  ];
  
  const A = 2;
  
  const V = multiplicarMatrizPorValor(M, A);
  console.log("Vetor V:", V);

/*
Usando entradas com prompt-sync
Matriz 6 x 6
let M = [];
for (let i = 0; i < 6; i++) {
    var linha = [];
    for (let j = 0; j < 6; j++) {
        var elemento = parseFloat(prompt(`Digite o elemento da posição [${i+1},${j+1}]: `));
        linha.push(elemento);
    }
    M.push(linha);
}

// Valor A
let A = parseFloat(prompt("Digite o valor de A: "));

// Multiplica a matriz M pelo valor A e obtém o vetor V
let V = multiplicarMatrizPorA(M, A)
*/





















