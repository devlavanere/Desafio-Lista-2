/*
26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5]. 
*/

function calcularProdutosMatrizes(A, B) {
    let linhasA = A.length;
    let colunasA = A[0].length;
    let linhasB = B.length;
    let colunasB = B[0].length;

    // Verifica se as dimensões das matrizes permitem o produto
    if(colunasA !== linhasB) {
        console.error('O número de colunas de A deve ser igual ao número de linhas de B.');
        return;
    }

    // Inicializa a matriz produto com zeros
    let P = new Array(linhasA);
    for(let i = 0; i < linhasA; i++) {
        P[i] = new Array(colunasB).fill(0);
    }

    //Calcula o P
    for(let i = 0; i < linhasA; i++) {
        for(let j = 0; j < colunasB; j++) {
            for(let k = 0; k < colunasA; k++) {
             P[i][j] = A[i][k] * B[k][j];
            }
        }
    }

    return P;
}

// Exemplo de utilização
var A = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

var B = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

var produto = calcularProdutoMatrizes(A, B);
console.log(produto);

/*
Sem utilizar a função fill

function calcularProdutoMatrizes(A, B) {
    var linhasA = A.length;
    var colunasA = A[0].length;
    var linhasB = B.length;
    var colunasB = B[0].length;

    // Verifica se as dimensões das matrizes permitem o produto
    if (colunasA !== linhasB) {
        console.error("O número de colunas de A deve ser igual ao número de linhas de B.");
        return;
    }

    // Inicializa a matriz produto com zeros
    var P = new Array(linhasA);
    for (var i = 0; i < linhasA; i++) {
        P[i] = [];
        for (var j = 0; j < colunasB; j++) {
            P[i][j] = 0;
        }
    }

    // Calcula o produto
    for (var i = 0; i < linhasA; i++) {
        for (var j = 0; j < colunasB; j++) {
            for (var k = 0; k < colunasA; k++) {
                P[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    return P;
}

// Exemplo de utilização
var A = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

var B = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15]
];

var produto = calcularProdutoMatrizes(A, B);
console.log(produto);

Este código calcula o produto das matrizes A e B, desde que A 
seja uma matriz com dimensões [linhasA, colunasA] e B seja uma 
matriz com dimensões [linhasB, colunasB], onde o número de colunas 
de A é igual ao número de linhas de B. Ele retorna a matriz produto P com dimensões [linhasA, colunasB].

*/