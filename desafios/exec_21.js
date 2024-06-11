/*
21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

const prompt = require('prompt-sync')();

function calculaPesoIdeal(alt, sexo) {
    let pesoIdeal;
    //Se o sexo for "Masculino", aplica a fórmula para homens.
    if(sexo === 'Masculino') {
        pesoIdeal = 72.7 * alt - 58;
    } else { //Se o sexo for "Feminino", aplica a fórmula para mulheres
        pesoIdeal = 62.1 * alt - 44.7;
    }

    return pesoIdeal.toFixed(2);
}

let altura = parseFloat(prompt('Digite sua altura: '));
let sexo = prompt('Digite o sexo "Masculino" / "Feminino": ').toLowerCase();

let pesoIdeal = calculaPesoIdeal(altura, sexo);

console.log(`A sua altura é ${altura.toFixed(2)}m e o sexo é ${sexo} seu peso ideal é: ${pesoIdeal}kg`);




