/*
14. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.
*/
const prompt = require('prompt-sync')();

function preencheArrayNomes(vetorNomes) {
    //Loop vai até o indice 3
    for(let i = 0; i < 4; i++) {
        let nome = prompt('Digite o nome: ').toUpperCase();
        //Nome digitado é colocado dentro do vetor de nomes
        vetorNomes.push(nome);
    }
    return vetorNomes;
}

let vetorNomes = preencheArrayNomes([]);

//Funcao que coloca na ordem inversa o array
function iverteArrayNomes() {
    for(let i = vetorNomes.length -1; i >= 0; i-- ) {
        console.log(vetorNomes[i])
    }
}

iverteArrayNomes();



