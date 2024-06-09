/*
28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;
*/

//Funcao para calcular a soma dos elementos acima e abaixo da diagonal principal 
function calcularSomasMatriz(matriz) {
    let somaAcimaDiagonal = 0;
    let somaAbaixoDiagonal = 0;

    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[i].length; j++) {
            //Acima da diagonal principal
            if(j > i) {
                somaAcimaDiagonal += matriz[i][j];
            }
            //Abaixo dional principal
            if(i > j) {
                somaAbaixoDiagonal += matriz[i][j];
            }
        }
    }
    //Cria um objeto que contem dois valores que serao retornados quando a funcao for chamada
    return {
        somaAcimaDiagonal: somaAcimaDiagonal,
        somaAbaixoDiagonal: somaAbaixoDiagonal
    }
}

//Matriz 10 X 10
var matriz = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
    [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
    [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
    [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
    [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
    [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
];

//Guardando as somas dentro da variavel resultados
let resultados = calcularSomasMatriz(matriz);
console.log("Soma dos elementos acima da diagonal principal:", resultados.somaAcimaDiagonal);
console.log("Soma dos elementos abaixo da diagonal principal:", resultados.somaAbaixoDiagonal);













