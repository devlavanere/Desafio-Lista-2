/*
Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número.
*/

function contarPropriedadesString(obj) {
    let contador = 0;
    
    // Verifica se o objeto é nulo ou indefinido
    if (objeto === null || typeof objeto !== 'object') {
      return 0;
    }

    //Percorre as propriedades do objeto
    for (const propriedade in obj) {
      if (typeof obj[propriedade] === 'string') {
        contador++;
      }
    }
    
    // Retorna o número de propriedades do tipo string
    return contador;
  }

  const meuObjeto = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    profissao: "Programador"
  };
  
  const quantidadeStrings = contarPropriedadesString(meuObjeto);
  
  console.log(quantidadeStrings); 








