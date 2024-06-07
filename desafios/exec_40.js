/*
Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondente ao resultado oficial da loto . A seguir leia 50 conjuntos de vetores
(com 5 elementos inteiros cada), representando as apostas feitas. Compare o numero das apostas com o resultado oficial e mostre uma mensagem
("Ganhador") se todos os numeros corresponderem a um resultado oficial. (Observaçao nao e necessario procurar por ternos e quadras apenas por
quinas).
*/

const prompt = require('prompt-sync')();

function verificarAposta(resultadoOficial, aposta) {
    // Contar acertos
    let acertos = 0;
  
    // Comparar cada número da aposta com o resultado oficial
    for (let i = 0; i < resultadoOficial.length; i++) {
      if (resultadoOficial[i] === aposta[i]) {
        acertos++;
      }
    }
  
    // Verificar se todos os números foram acertados
    if (acertos === resultadoOficial.length) {
      return "GANHADOR!";
    } else {
      return `Sua aposta: ${aposta.join(', ')}. Acertos: ${acertos}`;
    }
  }
  
  // Ler resultado oficial da Loto
  const resultadoOficial = [];
  for (let i = 0; i < 5; i++) {
    const numero = parseInt(prompt(`Digite o ${i + 1}º número do resultado oficial da Loto:`));
    resultadoOficial.push(numero);
  }
  
  // Ler 50 apostas
  const apostas = [];
  for (let i = 0; i < 50; i++) {
    const aposta = [];
    for (let j = 0; j < 5; j++) {
      const numeroAposta = parseInt(prompt(`Digite o ${j + 1}º número da aposta ${i + 1}:`));
      aposta.push(numeroAposta);
    }
    apostas.push(aposta);
  }
  
  // Verificar e imprimir resultados das apostas
  for (let i = 0; i < apostas.length; i++) {
    const resultadoAposta = verificarAposta(resultadoOficial, apostas[i]);
    console.log(`Aposta ${i + 1}: ${resultadoAposta}`);
  }
  







