/*
Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos.
*/

function combinarObjetos(obj1, obj2) {
    // Crie um novo objeto para armazenar os resultados
    const novoObjeto = {};
  
    // Copiapropriedades de obj1
    for (const propriedade in obj1) {
      novoObjeto[propriedade] = obj1[propriedade];
    }
  
    // Substitui as propriedades de obj1 com as de obj2, se houver conflitos
    for (const propriedade in obj2) {
      novoObjeto[propriedade] = obj2[propriedade];
    }
  
    // Retorne o novo objeto combinado
    return novoObjeto;
  }

//Criando objeto 1
const obj1 = {
  nome: "Marcos",
  idade: 30,
  cidade: "São Paulo"
};

//Criando objeto 2j
const obj2 = {
  idade: 25,
  profissao: "Programador"
};

const novoObjeto = combinarObjetos(obj1, obj2);
console.log(novoObjeto);


