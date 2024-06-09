/*
27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.
*/

// Função para multiplicar a matriz M pelo valor A e armazenar os resultados em um vetor V
function multiplicarMatrizPorA(M, A) {
    let linhasM = M.length;
    let colunasM = M[0].length;
    let tamanhoV = linhasM * colunasM;
    let V = [];

    // Multiplica os elementos da matriz por A e armazena no vetor V
    for(let i = 0; i < linhasM; i++) {
        for(let j = 0; j < colunasM; i++) {
            let resultado = M[i][j] * A;
            V.push(resultado);
        }
    }

    return V;

}

// Matriz M e valor A
let M = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36]
];

let A = 2; // Valor de A

// Multiplica a matriz M pelo valor A e obtém o vetor V
let V = multiplicarMatrizPorA(M, A);

// Exibe o vetor V
console.log("Vetor V após multiplicação da matriz M por A:");
console.log(V);


/*
Usando entradas com prompt-sync
Matriz 6 x 6
var M = [];
for (let i = 0; i < 6; i++) {
    var linha = [];
    for (let j = 0; j < 6; j++) {
        var elemento = parseFloat(prompt(`Digite o elemento da posição [${i+1},${j+1}]: `));
        linha.push(elemento);
    }
    M.push(linha);
}

// Valor A
let A = parseFloat(prompt("Digite o valor de A: "));

// Multiplica a matriz M pelo valor A e obtém o vetor V
var V = multiplicarMatrizPorA(M, A)
*/