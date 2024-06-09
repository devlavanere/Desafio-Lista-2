/*
8. Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/

const prompt = require('prompt-sync')();

function pontosPorAtividadeMes(horasAtividade) {

    let pontos = 0;
    let dinheiro = 0;
    
    // Verifica se o usuário teve alguma hora de atividade.
    if(horasAtividade > 0) {
        // Se o número de horas for menor ou igual a 10, calcula os pontos com a taxa de 2 pontos por hora.
        if(horasAtividade <= 10) {
            pontos = horasAtividade * 2;
            
        } else if(horasAtividade <= 20) { // Se o número de horas for menor ou igual a 20, calcula os pontos com a taxa de 5 pontos por hora.
            pontos = horasAtividade * 5;
        } else { // Se o número de horas for maior que 20, calcula os pontos com a taxa de 10 pontos por hora.
            pontos = horasAtividade * 10;
        }
    }

    // Calcula o valor em dinheiro que o usuário ganhou, multiplicando o número de pontos por 0,05.
    dinheiro = pontos * 0.05;

    return `Você teve ${pontos} pontos e ganhou R$${dinheiro.toFixed(2)} pelas horas de atividades realizadas no mês.`;

}

let horasAtividade = parseFloat(prompt('Digite o número de horas de atividade por mês: '));
let trocaPontosPorDinheiro = pontosPorAtividadeMes(horasAtividade);

console.log(trocaPontosPorDinheiro);







