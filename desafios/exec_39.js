/*
Faça um algoritmoque leia um vetor (A) de 100 posiçoes. Em seguida, compacte o vetor, retirando os valores nulos e negativos.
Coloque o resultado no vetor B.
*/

const prompt = require('prompt-sync')();

function compactarVetor(vetorA) {
    // Vetor para armazenar o resultado da compactação
    const vetorB = [];
  
    // Percorre cada elemento do vetor A
    for (let elemento of vetorA) {
      // Verifica se o elemento é positivo
      if (elemento > 0) {
        // Adiciona o elemento ao vetor B
        vetorB.push(elemento);
      }
    }
  
    // Retorna o vetor compactado
    return vetorB;
  }
  
  // Ler o vetor A
  const vetorA = [];
  for (let i = 0; i < 100; i++) {
    const valor = parseFloat(prompt(`Digite o valor para a posição ${i + 1} do vetor A:`));
    vetorA.push(valor);
  }
  
  // Compactar o vetor A
  const vetorB = compactarVetor(vetorA);
  
  // Imprimir o vetor B
  console.log("Vetor compactado (B):");
  for (let elemento of vetorB) {
    console.log(elemento);
  }
  




