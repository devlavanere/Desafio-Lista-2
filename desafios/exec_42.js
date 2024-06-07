/*
Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
*/

// Criando um objeto chamado dados
const dados = {
    nome: "Fulano",
    idade: 30,
    profissao: "Desenvolvedor",
    habilidades: ["JavaScript", "Python", "Java"],
    hobbies: ["Ler", "Assistir series", "Praticar esportes"]
  };
  
  // Função para filtrar propriedades que são arrays
  function filtrarArrays(objeto) {
    // Criando um novo objeto vazio
    const novoObjeto = {};
  
    // Percorrendo as propriedades do objeto original
    for (const propriedade in objeto) {
      // Verificando se a propriedade é um array
      if (Array.isArray(objeto[propriedade])) {
        // Adicionando a propriedade e seu valor ao novo objeto
        novoObjeto[propriedade] = objeto[propriedade];
      }
    }
  
    // Retornando o novo objeto com apenas as propriedades que são arrays
    return novoObjeto;
  }
  
  // Chamando a função filtrarArrays e armazenando o resultado em novasPropriedades
  const novasPropriedades = filtrarArrays(dados);
  
  // Imprimindo o novo objeto com apenas as propriedades que são arrays
  console.log(novasPropriedades);
  

  

