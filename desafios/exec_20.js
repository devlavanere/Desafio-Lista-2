/*
20. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).
*/

const prompt = require('prompt-sync')();

// Definição da função para calcular o desconto do INSS
function calcularINSS(salarioBruto) {
    const taxaINSS = 0.12; // Taxa de desconto do INSS
    return salarioBruto * taxaINSS;
}

// Definição da função para emitir o contracheque
function emitirContracheque(funcionario) {
    console.log("Matrícula:", funcionario.matricula);
    console.log("Nome:", funcionario.nome);
    console.log("Salário bruto:", funcionario.salarioBruto.toFixed(2));
    console.log("Dedução INSS:", funcionario.deducaoINSS.toFixed(2));
    console.log("Salário líquido:", (funcionario.salarioBruto - funcionario.deducaoINSS).toFixed(2));
    console.log("-----------------------------------------");
}

// Função principal para processar a tabela de funcionários e emitir os contracheques
function processarTabelaFuncionarios() {
    const funcionarios = [];

    // Lendo os dados de cada funcionário e armazenando na lista
    for (let i = 0; i < 2; i++) {
        let matricula = prompt(`Digite a matrícula do funcionário ${i + 1}: `);
        let nome = prompt(`Digite o nome do funcionário ${i + 1}: `);
        let salarioBruto = parseFloat(prompt(`Digite o salário bruto do funcionário ${i + 1}: `));

        // Calculando o desconto do INSS
        let deducaoINSS = calcularINSS(salarioBruto);

        // Armazenando os dados do funcionário na lista
        funcionarios.push({
            matricula: matricula,
            nome: nome,
            salarioBruto: salarioBruto,
            deducaoINSS: deducaoINSS
        });
    }

    // Emitindo os contracheques de cada funcionário
    for (let i = 0; i < funcionarios.length; i++) {
        console.log(`Contracheque do funcionário ${i + 1}:`);
        emitirContracheque(funcionarios[i]);
    }
}

// Chamando a função principal para processar a tabela de funcionários
processarTabelaFuncionarios();
