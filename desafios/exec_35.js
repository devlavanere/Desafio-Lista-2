/*
35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.
*/

function separarParesImpares(valores) {
    // Inicializa os vetores para pares e ímpares
    const pares = [];
    const impares = [];
  
    // Itera sobre os valores de entrada
    for (let i = 0; i < valores.length; i++) {
      const valor = valores[i];
  
      // Verifica se o valor é par
      if (valor % 2 === 0) {
        // Se o vetor de pares estiver cheio, escreve-o e limpa-o
        if (pares.length === 5) {
          console.log("Vetor de pares cheio:", pares);
          pares.length = 0; // Limpa o vetor de pares
        }
        // Adiciona o valor ao vetor de pares
        pares.push(valor);
      } else {
        // Se o vetor de ímpares estiver cheio, escreve-o e limpa-o
        if (impares.length === 5) {
          console.log("Vetor de ímpares cheio:", impares);
          impares.length = 0; // Limpa o vetor de ímpares
        }
        // Adiciona o valor ao vetor de ímpares
        impares.push(valor);
      }
    }
  
    // Escreve o conteúdo dos vetores após a leitura
    console.log("Vetor de pares:", pares);
    console.log("Vetor de ímpares:", impares);
  }
  
  // Exemplo de uso
  const valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
  separarParesImpares(valores);






