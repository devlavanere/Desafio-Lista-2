/*
16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

let numerosAleatorios = []; //Cria array vazio para armazenar os numeros aleatorios
//Gera os 20 numeros aleatorios
for(let i = 0; i < 20; i++) {
    let numero = Math.floor(Math.random() * 100);
    numerosAleatorios.push(numero);
}

//Imprime lista de numeros aleatorios
console.log("Números aleatórios gerados:");
console.log(numerosAleatorios);

//Ordena os numeros em ordem crescente
for(let i = 0; i < numerosAleatorios.length; i++) {
    for(let j = 0; j < numerosAleatorios.length - 1; j++) {
        if(numerosAleatorios[j] > numerosAleatorios[j + 1]) {
            // Troca os números de posição se estiverem fora de ordem
            let temp = numerosAleatorios[j];
            numerosAleatorios[j] = numerosAleatorios[j + 1];
            numerosAleatorios[j + 1] = temp;
        }
    }
}

//Imprime lista ordenada
console.log("Números em ordem crescente:");
console.log(numerosAleatorios);
















