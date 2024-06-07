/*
23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.
*/

/*function criarMatrizIdentidade(tamanho) {
    let matriz = [];

    for(let i = 0; i < tamanho; i++) {
        matriz[i] = [];
        for(let j = 0; j < tamanho; j++) {
            matriz[i][j] = (i === j) ? 1 : 0;
        }
    }

    return matriz;
}

function imprimirMatriz(matriz) {
    for(let i = 0; i < matriz.length; i++) {
        console.log(matriz[i].join(' '));
    }
}

// Criar uma matriz identidade 7x7
let matrizIdentidade = criarMatrizIdentidade(7);

// Imprimir a matriz identidade
console.log("Matriz Identidade 7x7:");
imprimirMatriz(matrizIdentidade);*/

/*
// j=0 j=1 j=2 j=3 j=4 j=5 j=6    
    [1, 2,  3,  4,  5,  6,  7], //i = 0
    [1, 2,  3,  4,  5,  6,  7]  //i = 1
    [1, 2,  3,  4,  5,  6,  7]  //i = 2
    [1, 2,  3,  4,  5,  6,  7]  //i = 3
    [1, 2,  3,  4,  5,  6,  7]  //i = 4
    [1, 2,  3,  4,  5,  6,  7]  //i = 5
    [1, 2,  3,  4,  5,  6,  7]  //i = 6


//Para dioganal principal ser 1
 i = 0 e j = 0 -> 1 / i = 1 e j = 1 -> 1 / i = 2 e j = 2 -> 1 / i = 3 e j = 3 -> 1 /
 i = 4 e j = 4 -> 1 / i = 5 e j = 5 -> 1 / i = 6 e j = 6 -> 1
 */

 function criarMatrizIdentidade(tamanho) {
    let matriz = [];
    for (let i = 0; i < tamanho; i++) {
        matriz[i] = [];
        for (let j = 0; j < tamanho; j++) {
            matriz[i][j] = (i === j) ? 1 : 0;
        }
    }
    return matriz;
}

// Criar uma matriz identidade 7x7
let matrizIdentidade = criarMatrizIdentidade(7);

// Imprimir a matriz identidade
console.log("Matriz Identidade 7x7:");
console.table(matrizIdentidade);
