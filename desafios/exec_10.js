/*
10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.
*/
//*Refatorar código

const prompt = require('prompt-sync')();

function lerNumero() {
    let numeros = [];
    let continuar = true;
    let menorValor = 0;
    let somaNumero = 0;
    let quantidadePares = 0;

    do {
        let numero = parseFloat(prompt('Digite um número: '));
        numeros.push(numero);

        for(let i = 0; i < numeros.length; i++) {
            somaNumero += numeros[i];

            if(numeros[i] < menorValor) {
                menorValor = numeros[i];
            }

            if(numeros[i] % 2 === 0){
                quantidadePares ++;
            }
        }

        continuar = prompt('S ou N: ');
        continuar = continuar === 'S' ? true : false;
            
    } while(continuar);

    let media = somaNumero / numeros.length -1;

    return `Soma Total: ${somaNumero}; Menor Valor Digitado: ${menorValor}; Quantidade de Pares: ${quantidadePares}; Média: ${media} `;
        
}

console.log(lerNumero());

/*function lerNumero() {
  let numeros = [];
  let continuar = true;
  let menorValor = Infinity; // Inicializa com infinito para garantir que o primeiro número seja o menor
  let somaNumero = 0;
  let quantidadePares = 0;

  do {
    let numero = parseFloat(prompt('Digite um número: '));
    numeros.push(numero);

    // Atualiza a soma e o menor valor APENAS com o último número digitado
    somaNumero += numero;
    if (numero < menorValor) {
      menorValor = numero;
    }
    if (numero % 2 === 0) {
      quantidadePares++;
    }

    continuar = prompt('S ou N: ').toUpperCase() === 'S'; // Simplifica a verificação de 'S'

  } while (continuar);

  // Calcula a média corretamente (excluindo o último -1)
  let media = somaNumero / numeros.length;

  return `Soma Total: ${somaNumero}; Menor Valor Digitado: ${menorValor}; Quantidade de Pares: ${quantidadePares}; Média: ${media} `;
}

console.log(lerNumero());*/











