/*
Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/

function agruparTransacoesPorCategoria(transacoes) {
    //Cria objeto vazio para armazenar as trasaçoes organizadas por categoria
    const transacoesAgrupadas = {};
    // Percorre as transações
    for (const transacao of transacoes) {
      const categoria = transacao.categoria;
      //Cria entrada para categaria, caso nao exista
      if (!transacoesAgrupadas[categoria]) {
        transacoesAgrupadas[categoria] = {
          transacoes: [],
          subtotal: 0,
        };
      }
      
      //Adiciona transacao ao grupo
      transacoesAgrupadas[categoria].transacoes.push(transacao);
      //Atualiza subtotal
      transacoesAgrupadas[categoria].subtotal += transacao.valor;
    }
  
    return transacoesAgrupadas;
}

const transacoes = [
    { id: 1, valor: 100, data: "2023-10-26", categoria: "Comida" },
    { id: 2, valor: 50, data: "2023-10-27", categoria: "Transporte" },
    { id: 3, valor: 75, data: "2023-10-28", categoria: "Comida" },
    { id: 4, valor: 25, data: "2023-10-29", categoria: "Lazer" },
    { id: 5, valor: 10, data: "2023-10-30", categoria: "Transporte" }
];
  
const transacoesAgrupadas = agruparTransacoesPorCategoria(transacoes);
  
console.log(transacoesAgrupadas);





