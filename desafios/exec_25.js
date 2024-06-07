/*
25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente.
*/

function somaColunaMatriz(matriz) {
    const numLinhas = matriz.length;
    const numColunas = matriz[0].length;

    // Cria um array para armazenar a soma de cada coluna
  const somaColunas = new Array(numColunas).fill(0);

  // Itera sobre as colunas da matriz
  for (let j = 0; j < numColunas; j++) {
    // Itera sobre as linhas da matriz
    for (let i = 0; i < numLinhas; i++) {
      // Soma o valor da célula atual à soma da coluna correspondente
      somaColunas[j] += matriz[i][j];
    }
  }

  // Retorna o array com a soma de cada coluna
  return somaColunas;
}

// Exemplo de uso
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
];

const somaColunas = somarColunasMatriz(matriz);
console.log("Soma de cada coluna:", somaColunas);


/*
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

// Exemplo de uso
const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
];

const somaColunas = somarColunasMatriz(matriz);
console.log("Soma de cada coluna:", somaColunas); 
*/

/*
Explicação do Código:
1- somarColunasMatriz(matriz):
Recebe a matriz como argumento.
Define numLinhas e numColunas para armazenar as dimensões da matriz.
Cria um array somaColunas inicializado com zeros, com tamanho igual ao número de colunas da matriz.

2- Loop externo (for (let j = 0; j < numColunas; j++)):

Itera sobre cada coluna da matriz.

3- Loop interno (for (let i = 0; i < numLinhas; i++)):
Itera sobre cada linha da matriz para a coluna j atual.
somaColunas[j] += matriz[i][j] adiciona o valor da célula atual (matriz[i][j]) à soma da coluna correspondente (somaColunas[j]).
return somaColunas: Retorna o array somaColunas contendo a soma de cada coluna.

Exemplo de Uso:
O código inclui um exemplo de matriz 5x3.
A função somarColunasMatriz é chamada com a matriz de exemplo.
O resultado (a soma de cada coluna) é exibido no console.
Para usar com uma matriz 15x20:
Crie sua matriz 15x20.
Passe essa matriz para a função somarColunasMatriz:
*/

/*
Mudanças:
const somaColunas = [];: Agora, somaColunas é inicializado como um array vazio.
somaColunas[j] = 0;: Dentro do loop externo, antes de iterar sobre as linhas, a soma da coluna atual (somaColunas[j]) é explicitamente inicializada como 0. Isso garante que cada coluna comece com uma soma zerada.
O restante do código funciona da mesma forma, iterando sobre as linhas e colunas para calcular a soma de cada coluna e armazená-la no array somaColunas.

 */