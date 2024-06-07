/*
22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a média do
número de filhos, o maior salário e o percentual de pessoas com salário até R$350,00.
*/

const prompt = require('prompt-sync')();

function coletaDados() {
    let salarios = [];
    let filhos = [];
    let quantidadePessoas = 0;
    let somaSalario = 0;
    let somaFilhos = 0;
    let maiorSalario = 0;
    let sair;
    while(sair !==0) {
        let salario = parseFloat(prompt('Digite o salário: '));
        salarios.push(salario);
        let numeroFilhos = parseInt(prompt('Digite o número de filhos:'));
        filhos.push(numeroFilhos);
        
        somaSalario += salario;
        somaFilhos += numeroFilhos;

        for(let i = 0; i < salarios.length; i++){
            if(salarios[i] > maiorSalario) {
                maiorSalario = salarios[i];
            }

            if(salarios[i] < 350) {
                quantidadePessoas++;
            }
        }

        sair = parseInt(prompt('Digite 0 para sair para continuar digite qualquer outra tecla: '))
    }

    let mediaSalario = somaSalario / salarios.length;
    let mediaFilhos = somaFilhos / filhos.length;
    let percentualMenor350 = (quantidadePessoas / salarios.length) * 100;

    console.log(`Média de Salarial: R$${mediaSalario.toFixed(2)}`);
    console.log(`Média de Filhos: ${mediaFilhos}`);
    console.log(`Maior Salário: R$${maiorSalario.toFixed(2)}`);
    console.log(`Percentual de pessoas com salário até R$350,00: ${percentualMenor350}%`)
}

coletaDados();