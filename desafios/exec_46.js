/*
Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
*/

function totalVendasPorVendedor(vendas) {
    const totalVendas = {};
    // Percorre o array de vendas
    for (const venda of vendas) {
      const vendedor = venda.vendedor; //Acessa o nome do vendedor
      const valor = venda.valor; //Acessa o valor da venda
      
      //Atualiza total do vendedor, caso ele exista o valor é adicionado ao valor total, caso não, é adicionado como chave do objeto com valor atual de venda.
      if (totalVendas[vendedor]) {
        totalVendas[vendedor] += valor;
      } else {
        totalVendas[vendedor] = valor;
      }
    }
  
    return totalVendas;
}

const vendas = [
    { vendedor: "Ana", valor: 100 },
    { vendedor: "Hugo", valor: 50 },
    { vendedor: "Marcos", valor: 75 },
    { vendedor: "Pedro", valor: 25 },
    { vendedor: "Maria", valor: 10 }
];
  
const totalVendasPorVendedor = totalVendasPorVendedor(vendas);
  
console.log(totalVendasPorVendedor);