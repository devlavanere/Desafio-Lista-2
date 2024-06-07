/*
17. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
*/

const prompt = require('prompt-sync')();

let vetorNome = [];
let vetorIdade = [];

function lerNomeEIdade() {
    console.log('Ler Nome e Idade de 9 Pessoas: ')
    for(let i = 0; i < 9; i++) {
        let nome = prompt('Digite o nome: ');
        let idade = parseInt(prompt('Digite a idade: '));

        vetorNome.push(nome);
        vetorIdade.push(idade);
    }
}

function mostrarMenoresDeIdade() {
    console.log('Listando Menores de Idade:')
    for(let i = 0; i < vetorIdade.length; i++) {
        if(vetorIdade[i] < 18) {
            console.log(`Nome: ${vetorNome[i]}, Idade: ${vetorIdade[i]}`)
        }
    }
}

lerNomeEIdade();
mostrarMenoresDeIdade();


//Utilizando um array com objetos

/*let pessoas = [];

function lerDadosDasPessoas() {
  console.log('Digite os dados das 9 pessoas:');
  for (let i = 0; i < 9; i++) {
    let nome = prompt('Digite o nome da pessoa: ');
    let idade = parseInt(prompt('Digite a idade da pessoa: '));
    pessoas.push({ nome: nome, idade: idade });
  }
}

function mostrarMenoresDeIdade() {
  console.log('Pessoas menores de idade:');
  for (let pessoa of pessoas) {
    if (pessoa.idade < 18) {
      console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
    }
  }
}

lerDadosDasPessoas();
mostrarMenoresDeIdade();*/