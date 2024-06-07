/*
Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.
*/

function transformarObjeto(obj, funcao) {
    //Cria um objeto vazio
    const novoObjeto = {};

    //Percorre as propriedades do objeto obj
    for (const propriedade in obj) {
      //Para cada propriedade, a função fornecida como argumento é aplicada ao valor da propriedade (obj[propriedade]). 
      novoObjeto[propriedade] = funcao(obj[propriedade]);
    }
  
    return novoObjeto;
}

const meuObjeto = {
    a: 1,
    b: 2,
    c: 3
};
  
const dobrar = (valor) => valor * 2;
  
const objetoDobrado = transformarObjeto(meuObjeto, dobrar);
  
console.log(objetoDobrado);














