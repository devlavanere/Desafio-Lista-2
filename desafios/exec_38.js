/*
Elabore um algoritmo que leia um vetor de 6 posiçoes e apos sua leitura leia outra variavel identificadora que calcule
a operaçao conforme a informaçao contida nesta variavel:
    1- soma dos elementos;
    2- produto dos elementos;
    3- media dos elementos;
    4- ordene os elementos em ordem crescente;
    5- mostre o vetor.
*/

const prompt = require('prompt-sync')();

function calculaOperacao() {
    //Declaracao do vetor
    const vetor = [];
    for(let i = 0; i < 6; i++) {
        vetor.push(0);
    }

    //Leitura dos elementos do vetor
    for(let i = 0; i < vetor.length; i++) {
        vetor[i] = parseFloat(prompt(`Digite o elemento ${i + 1}: `));
    }

    //Leitura da variável indentificadora da operação
    const operacao = parseInt(prompt("Digite a operação desejada (1-soma, 2-produto, 3-média, 4-ordenar, 5-mostrar vetor):"));

    //Realizando operações de acordo com a variável identificadora
    switch(operacao) {
        case 1:
            let soma = 0;
            for (const elemento of vetor) {
                soma += elemento;
            }
            console.log(`Soma dos elementos: ${soma}`);
            break;
        case 2:
            let produto = 1;
            for(const elemento of vetor) {
                produto *= elemento;
            }
            console.log(`Produto dos elementos: ${produto}`);
            break;
        case 3:
            let media = 0;
            let quantidadeElementos = 0;
            for(let i = 0; i < vetor.length; i++) {
                media += vetor[i];
                quantidadeElementos++;
            }
            media /= quantidadeElementos;
            console.log(`Media dos elementos: ${media}`);
            break;
        case 4:
            ordenarVetor(vetor);
            console.log("Vetor ordenado:");
            console.log(vetor);
            break;
        case 5:
            console.log("Vetor original:");
            console.log(vetor);
            break;
        default:
            console.error("Operação invalida!")

    }

    //Funcao para ordenaçao do vetor
    function ordenarVetor(vetor) {
        for (let i = 0; i < vetor.length; i++) {
            for (let j = i + 1; j < vetor.length; j++) {
                if (vetor[i] > vetor[j]) {
                    const temp = vetor[i];
                    vetor[i] = vetor[j];
                    vetor[j] = temp;
                }
            }
        }
    }
}

calculaOperacao();