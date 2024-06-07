/*
Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.
*/

function contarOcorrencias(array) {
    const contagem = {};
    // Percorre o array de strings"
    for (const string of array) {
      //A condicional verifica se a string ja existe ou nao existe como chave do objeto
      if (contagem[string]) {
        contagem[string]++;
      } else {
        contagem[string] = 1;
      }
    }
  
    return contagem;
  }

const palavras = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];

const contagemPalavras = contarOcorrencias(palavras);

console.log(contagemPalavras);


