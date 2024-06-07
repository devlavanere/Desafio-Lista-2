/*
Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.
*/

function combinarInventarios(inventarioLojaA, inventarioLojaB) {
    const inventarioCombinado = { ...inventarioLojaA }; // Copia as propriedades de inventarioLojaA com o uso do Spread

    // Combina com as propriedades de inventarioLojaB
    for (const item in inventarioLojaB) {
      if (inventarioCombinado[item]) {
        inventarioCombinado[item] += inventarioLojaB[item];
      } else {
        inventarioCombinado[item] = inventarioLojaB[item];
      }
    }
  
    return inventarioCombinado;
}

const inventarioLojaA = {
  "Maçã": 10,
  "Banana": 5,
  "Laranja": 8
};

const inventarioLojaB = {
  "Banana": 3,
  "Uva": 7,
  "Maçã": 2
};
  
const inventarioCombinado = combinarInventarios(inventarioLojaA, inventarioLojaB);
  
console.log(inventarioCombinado);