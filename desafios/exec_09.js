/*
9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.
*/

const prompt = require('prompt-sync')();

function compracaoSalarioPorSexo() {
    let totalSalariosHomens = 0;
    let totalSalariosMulheres = 0;
    let continuar = true;
    while(continuar) {
        let salario = parseFloat(prompt('Digite o salario: '));
        let sexo = prompt('Digite o sexo do funcionário: ');
        
        if(sexo === 'M') {
            totalSalariosHomens += salario;
        } else {
            totalSalariosMulheres += salario;
        }

        continuar = prompt('Digite S ou N: ').toUpperCase;
        continuar = continuar === 'S' ? true : false;
        
    }
    return `O total do salário pago aos homens é R$ ${totalSalariosHomens} e o total de sálario pago as mulheres é R$ ${totalSalariosMulheres}.`;
}

console.log(compracaoSalarioPorSexo());