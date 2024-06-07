/*
24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.
*/

function contarNegativosPorLinha(matriz) {
    const linhas = matriz.length;
    const colunas = matriz[0].length;
    const vetorC = [];
  
    for (let i = 0; i < linhas; i++) {
      let contador = 0;
      for (let j = 0; j < colunas; j++) {
        if (matriz[i][j] < 0) {
          contador++;
        }
      }
      vetorC.push(contador);
    }
  
    return vetorC;
  }
  
  // Exemplo de uso:
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

  /*
  Explicação:
1- contarNegativosPorLinha(matriz):

Recebe a matriz M como entrada.
Define as variáveis linhas e colunas para armazenar as dimensões da matriz.
Cria um vetor vazio vetorC para armazenar os resultados.

2- Loop externo (linhas):

Itera sobre cada linha da matriz usando a variável i.
Inicializa um contador contador como 0 para cada linha.

3- Loop interno (colunas):

Itera sobre cada elemento da linha atual usando a variável j.
Verifica se o elemento matriz[i][j] é negativo.
Se for negativo, incrementa o contador.

4-Após o loop interno:

Adiciona o valor do contador (número de negativos na linha) ao vetorC.

5- Após o loop externo:

Retorna o vetorC contendo a contagem de negativos para cada linha.
Exemplo de Uso:
O código inclui um exemplo de uso com uma matriz matrizM.
A função contarNegativosPorLinha é chamada com matrizM, e o resultado é armazenado em vetorC.
O conteúdo de vetorC é impresso no console.
Este código fornecerá a contagem de elementos negativos em cada linha da matriz M, conforme solicitado.
  */