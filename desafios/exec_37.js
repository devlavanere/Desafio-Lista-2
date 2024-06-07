/*
Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa o gabarito de uma prova. A seguir para cada um dos 50 alunos
da turma, leia o vetor de repostas (R) do aluno e conte o numero de acertos. Mostre o numero de acertos do aluno e uma mensagem "Aprovado" se a
quantidade de acertosfor maior ou igual a 12 e mostre uma mensagem de "REPROVADO", caso contrario.
*/

const prompt = require('prompt-sync')();

//Vetor gabarito da prova
let gabarito = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'];

//Funçao para contar numeros de acertos de um aluno
function contarAcertos(respostas) {
    let acertos = 0;
    for(let i = 0; i < gabarito.length; i++) {
        if(respostas[i] === gabarito[i]) {
            acertos++;
        }
    }
    return acertos;
}

//Loop para cada um dos 50 alunos
for(let aluno = 1; aluno <= 50; aluno++) {
    //Resposta de cada aluno
    let respostaAluno = [];
    console.log("Reaposta do aluno ", aluno, ":");
    for(let i = 0; i < gabarito.length; i++) {
        //Utilizando resposta aleatoria
        //let respostaAleatoria = gabarito[Math.floor(Math.random() * gabarito.length)];
        //respostaAluno.push(respostaAleatoria);

        let resposta = prompt("Resposta " + (i +1) + ":");
        respostaAluno.push(resposta.toUpperCase());
    }

    //Contagem acertos do aluno
    let numeroAcertos = contarAcertos(respostaAluno);

    //Verificando se aluno foi aprovado ou reprovado
    if (numeroAcertos >= 12) {
        console.log(`Aluno ${aluno}: ${numeroAcertos} acertos - Aprovado`);
    } else {
        console.log(`Aluno ${aluno}: ${numeroAcertos} acertos - Reprovado`);
    }
}


