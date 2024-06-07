/*
Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. Adicione uma nova propriedade chamada email ao objeto
pessoa que ja possui nome e idade.
*/

//Craiando objeto pessoa com nome e idade
const pessoa = {
    nome: 'Michel',
    idade: 38
}

//Imprimindo o valor de idade
console.log(`Idade: ${pessoa.idade}`);

//Acrescentando email no objeto pessoa
pessoa.email = 'maisprati@gmail.com';

//Imprimindo objeto pessoa atualizado
console.log(pessoa);
