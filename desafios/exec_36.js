/*
36. Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".
*/

const prompt = require('prompt-sync')();

function verificarLoteriaEsportiva() {
    // Lê o gabarito
    const gabarito = [];
    console.log("Digite os 13 elementos do gabarito:");
    for (let i = 0; i < 13; i++) {
      gabarito[i] = parseInt(prompt(`Digite o elemento ${i + 1} do gabarito:`));
    }
  
    // Processa as apostas dos apostadores
    for (let i = 1; i <= 100; i++) { // Itera sobre os 100 apostadores
      // Lê o número do cartão do apostador
      const numeroCartao = parseInt(prompt(`Digite o número do cartão do apostador ${i}:`));
  
      // Lê as respostas do apostador
      const respostas = [];
      console.log(`Digite as respostas do apostador ${i}:`);
      for (let j = 0; j < 13; j++) {
        respostas[j] = parseInt(prompt(`Digite o elemento ${j + 1} da resposta:`));
      }
  
      // Verifica os acertos
      let acertos = 0;
      for (let j = 0; j < 13; j++) {
        if (respostas[j] === gabarito[j]) {
          acertos++;
        }
      }
  
      // Imprime o resultado do apostador
      console.log(`Apostador ${numeroCartao}: ${acertos} acertos`);
  
      // Verifica se o apostador ganhou
      if (acertos === 13) {
        console.log("Parabéns, voce foi o GANHADOR!");
      }
    }
  }
  
  verificarLoteriaEsportiva();




