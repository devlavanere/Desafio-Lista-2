/*
22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a média do
número de filhos, o maior salário e o percentual de pessoas com salário até R$350,00.
*/

const prompt = require('prompt-sync')();

function coletaDados() {
    // Inicializa as variáveis para armazenar os dados
    let salarios = []; // Array para armazenar os salários
    let filhos = []; // Array para armazenar o número de filhos
    let somaSalario = 0; // Variável para somar os salários
    let somaFilhos = 0; // Variável para somar o número de filhos
    let maiorSalario = 0; // Variável para guardar o maior salário
    let quantidadePessoasMenor350 = 0; // Variável para contar pessoas com salário menor que 350
  
    // Loop para coletar dados até o usuário digitar 0
    let continuar = true;
    while (continuar) {
      // Lê o salário do usuário e adicionar ao array
      let salario = parseFloat(prompt('Digite o salário: '));
      salarios.push(salario);
  
      // Lê o número de filhos do usuário e adicionar ao array
      let numeroFilhos = parseInt(prompt('Digite o número de filhos: '));
      filhos.push(numeroFilhos);
  
      // Atualiza as somas dos salários e filhos
      somaSalario += salario;
      somaFilhos += numeroFilhos;
  
      // Verifica se o salário atual é o maior
      if (salario > maiorSalario) {
        maiorSalario = salario;
      }
  
      // Verifica se o salário atual é menor que 350 e incrementa o contador
      if (salario < 350) {
        quantidadePessoasMenor350++;
      }
  
      // Pergunta ao usuário se deseja continuar ou sair
      let resposta = parseInt(prompt('Digite 0 para sair, qualquer outra tecla para continuar: '));
      continuar = resposta !== 0; // Se o usuário digitar 0, continuar será false
    }
  
    // Calcula a média salarial
    let mediaSalario = somaSalario / salarios.length;
  
    // Calcula a média de filhos
    let mediaFilhos = somaFilhos / filhos.length;
  
    // Calcula o percentual de pessoas com salário menor que 350
    let percentualMenor350 = (quantidadePessoasMenor350 / salarios.length) * 100;
  
    // Imprime os resultados no console
    console.log(`Média de Salarial: R$${mediaSalario.toFixed(2)}`);
    console.log(`Média de Filhos: ${mediaFilhos}`);
    console.log(`Maior Salário: R$${maiorSalario.toFixed(2)}`);
    console.log(`Percentual de pessoas com salário até R$350,00: ${percentualMenor350}%`);
  }
  
  coletaDados();
















