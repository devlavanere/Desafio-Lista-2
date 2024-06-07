/*
13. Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.
*/

function fibonacci(n) {
    let sequencia = [1, 1]; // Começando com os dois primeiros elementos da sequência
    for (let i = 2; i < n; i++) { // Loop começando a partir do terceiro elemento até o n-ésimo
        sequencia.push(sequencia[i - 1] + sequencia[i - 2]); // O próximo elemento é a soma dos dois anteriores
    }
    return sequencia;
}

// Preenchendo um vetor com os primeiros 15 elementos da Sequência de Fibonacci
let vetorFibonacci = fibonacci(15);

// Exibindo o vetor preenchido
console.log("Os primeiros 15 elementos da Sequência de Fibonacci são:");
console.log(vetorFibonacci.join(", "));
