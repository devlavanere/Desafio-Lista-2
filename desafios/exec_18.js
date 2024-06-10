/*
18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.
*/

const prompt = require('prompt-sync')();

//A classe Funcionario define um modelo para representar um funcionário, com os atributos nome, cargo e salario
class Funcionario {
    //O construtor inicializa os atributos quando um novo objeto Funcionario é criado
    constructor(nome, cargo, salario) {
      this.nome = nome;
      this.cargo = cargo;
      this.salario = salario;
    }
    //O método mostrarDados formata e imprime os dados do funcionário no console.
    mostrarDados() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Cargo: ${this.cargo}`);
      console.log(`Salário: ${this.salario.toFixed(2)}`);
    }
  }
  
  // Leitura dos dados do funcionário
  const nome = prompt("Digite o nome do funcionário: ").toUpperCase();
  const cargo = prompt("Digite o cargo do funcionário: ").toUpperCase();
  const salario = parseFloat(prompt("Digite o salário do funcionário: "));
  
  // Criando o objeto Funcionario
  const funcionario = new Funcionario(nome, cargo, salario);
  
  // Mostrando os dados do funcionário
  console.log("\nDados do Funcionário:");
  funcionario.mostrarDados();