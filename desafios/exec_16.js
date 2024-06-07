/*
16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

let numerosAleatorios = [];
for(let i = 0; i < 20; i++) {
    let numero = Math.floor(Math.random() * 100);
    numerosAleatorios.push(numero);
}

console.log("Números aleatórios gerados:");
console.log(numerosAleatorios);

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

console.log("Números em ordem crescente:");
console.log(numerosAleatorios);

/*let numerosAleatorios = [];
for(let i = 0; i < 20; i++) {
    let numero = Math.floor(Math.random() * 100);
    numerosAleatorios.push(numero);
}

console.log("Números aleatórios gerados:");
console.log(numerosAleatorios);

// Ordenando os números em ordem crescente
let ordemCrescente = numerosAleatorios.slice().sort((a, b) => a - b);

console.log("Números em ordem crescente:");
console.log(ordemCrescente);*/

// Função para preencher o vetor com números aleatórios entre 0 e 99
/*function preencherVetor(vetor, tamanho) {
    for (let i = 0; i < tamanho; i++) {
        vetor[i] = Math.floor(Math.random() * 100); // Gera um número aleatório entre 0 e 99
    }
}

// Função para ordenar o vetor em ordem crescente usando o algoritmo de ordenação bolha (bubble sort)
function ordenarVetor(vetor) {
    let trocado;
    do {
        trocado = false;
        for (let i = 0; i < vetor.length - 1; i++) {
            if (vetor[i] > vetor[i + 1]) {
                let temp = vetor[i];
                vetor[i] = vetor[i + 1];
                vetor[i + 1] = temp;
                trocado = true;
            }
        }
    } while (trocado);
}

// Função para exibir os elementos do vetor
function mostrarVetor(vetor) {
    console.log("Números gerados:");
    console.log(vetor.join(", "));
}

// Criando o vetor com 20 posições
let vetor = new Array(20);

// Preenchendo o vetor com números aleatórios
preencherVetor(vetor, vetor.length);

// Exibindo os números gerados
mostrarVetor(vetor);

// Ordenando o vetor em ordem crescente
ordenarVetor(vetor);

// Exibindo os números ordenados
console.log("\nNúmeros ordenados:");
console.log(vetor.join(", "));*/

