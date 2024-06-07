/*
12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/

function fibonacci() {
    let sequencia = [1,1]; //Dois primeiros elementos da sequência

    for(let i = 2; i < 10; i++) { //Começando com índice 2 que corresponde ao terceiro elemento
        sequencia.push(sequencia[i - 1] + sequencia[i - 2]); //O próximo elemento é a soma dos dois anteriores

    }

    return sequencia;
}

console.log("Os 10 primeiros elementos da Sequência de Fibonacci são:");
console.log(fibonacci().join(", "));