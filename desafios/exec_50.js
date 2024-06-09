const prompt = require('prompt-sync')();

// Estrutura de dados
let hoteis = []; // Array para armazenar os dados dos hotéis
let reservas = []; // Array para armazenar os dados das reservas

let idHotel = 1; // Contador para gerar IDs únicos para hotéis
let idReserva = 1; // Contador para gerar IDs únicos para reservas

// Funções
function adicionarHotel() {
  const nome = prompt("Digite o nome do hotel:"); // Pede o nome do hotel
  const cidade = prompt("Digite a cidade do hotel:"); // Pede a cidade do hotel
  const quartosTotais = parseInt(prompt("Digite o número total de quartos:")); // Pede o número total de quartos e converte para inteiro

  hoteis.push({ // Adiciona um novo hotel ao array de hotéis
    id: idHotel++, // Atribui um ID único ao hotel e incrementa o contador
    nome: nome, // Armazena o nome do hotel
    cidade: cidade, // Armazena a cidade do hotel
    quartosTotais: quartosTotais, // Armazena o número total de quartos
    quartosDisponiveis: quartosTotais, // Inicializa o número de quartos disponíveis como o total
  });

  console.log("Hotel adicionado com sucesso!");
}

function buscarHoteisPorCidade() {
  const cidade = prompt("Digite a cidade que deseja procurar:"); // Pede a cidade para a pesquisa

  const hoteisEncontrados = []; // Array para armazenar os hotéis encontrados

  // Itera pelos hotéis do array
  for (let i = 0; i < hoteis.length; i++) { 
    // Verifica se a cidade do hotel corresponde à cidade pesquisada
    if (hoteis[i].cidade === cidade) { 
      hoteisEncontrados.push(hoteis[i]); // Adiciona o hotel encontrado ao array
    }
  }

  if (hoteisEncontrados.length > 0) { // Verifica se algum hotel foi encontrado
    console.log(`Hoteis encontrados em ${cidade}:`)
    // Itera pelos hotéis encontrados e exibe informações
    for (let i = 0; i < hoteisEncontrados.length; i++) {
      console.log(
        "ID: " +
          hoteisEncontrados[i].id +
          ", Nome: " +
          hoteisEncontrados[i].nome +
          ", Quartos Disponíveis: " +
          hoteisEncontrados[i].quartosDisponiveis
      );
    }
  } else {
    console.log("Nenhum hotel encontrado em " + cidade + ".");
  }
}

function fazerReserva() {
  const idHotel = parseInt(prompt("Digite o ID do hotel:")); 
  const nomeCliente = prompt("Digite o nome do cliente:");

  let hotelEncontrado = null; // Inicializa a variável para armazenar o hotel encontrado
  // Itera pelos hotéis para encontrar o hotel com o ID informado
  for (let i = 0; i < hoteis.length; i++) { 
    if (hoteis[i].id === idHotel) {
      hotelEncontrado = hoteis[i]; // Atribui o hotel encontrado à variável
      break;
    }
  }

  if (hotelEncontrado) { // Verifica se o hotel foi encontrado
    if (hotelEncontrado.quartosDisponiveis > 0) { // Verifica se há quartos disponíveis
      hotelEncontrado.quartosDisponiveis--; // Decrementa o número de quartos disponíveis
      reservas.push({ // Adiciona uma nova reserva ao array
        idReserva: idReserva++, // Atribui um ID único à reserva e incrementa o contador
        idHotel: idHotel, // Armazena o ID do hotel da reserva
        nomeCliente: nomeCliente, // Armazena o nome do cliente
      });
      console.log("Reserva feita com sucesso!"); // Mensagem de confirmação
    } else {
      console.log("Não há quartos disponíveis neste hotel."); // Mensagem caso não haja quartos disponíveis
    }
  } else {
    console.log("Hotel não encontrado."); // Mensagem caso o hotel não seja encontrado
  }
}

function cancelarReserva() {
  const idReserva = parseInt(prompt("Digite o ID da reserva que deseja cancelar:"));

  let reservaEncontrada = null; // Inicializa a variável para armazenar a reserva encontrada
  // Itera pelas reservas para encontrar a reserva com o ID informado
  for (let i = 0; i < reservas.length; i++) { 
    if (reservas[i].idReserva === idReserva) {
      reservaEncontrada = reservas[i]; // Atribui a reserva encontrada à variável
      break;
    }
  }

  if (reservaEncontrada) { // Verifica se a reserva foi encontrada
    // Itera pelos hotéis para encontrar o hotel da reserva
    for (let i = 0; i < hoteis.length; i++) {
      if (hoteis[i].id === reservaEncontrada.idHotel) { 
        hoteis[i].quartosDisponiveis++; // Incrementa o número de quartos disponíveis do hotel
        break;
      }
    }

    // Itera pelas reservas para remover a reserva cancelada
    for (let i = 0; i < reservas.length; i++) {
      if (reservas[i].idReserva === idReserva) {
        reservas.splice(i, 1); // Remove a reserva do array
        break;
      }
    }

    console.log("Reserva cancelada com sucesso!"); // Mensagem de confirmação
  } else {
    console.log("Reserva não encontrada."); // Mensagem caso a reserva não seja encontrada
  }
}

function listarReservas() {
  if (reservas.length > 0) { // Verifica se há reservas
    console.log("Lista de Reservas:");
    // Itera pelas reservas e exibe informações
    for (let i = 0; i < reservas.length; i++) {
      // Itera pelos hotéis para encontrar o hotel da reserva
      for (let j = 0; j < hoteis.length; j++) {
        if (hoteis[j].id === reservas[i].idHotel) {
          console.log(
            "ID da Reserva: " +
              reservas[i].idReserva +
              ", Hotel: " +
              hoteis[j].nome +
              ", Cliente: " +
              reservas[i].nomeCliente
          );
          break;
        }
      }
    }
  } else {
    console.log("Não há reservas no sistema."); // Mensagem caso não haja reservas
  }
}

// Menu de Interação
while (true) { // Loop principal para interagir com o usuário
  console.log("\nMenu:");
  console.log("1. Adicionar Hotel");
  console.log("2. Buscar Hoteis por Cidade");
  console.log("3. Fazer Reserva");
  console.log("4. Cancelar Reserva");
  console.log("5. Listar Reservas");
  console.log("6. Sair");

  const opcao = parseInt(prompt("Digite a opção desejada:"));

  switch (opcao) {
    case 1:
      adicionarHotel(); // Adiciona um novo hotel
      break;
    case 2:
      buscarHoteisPorCidade(); // Busca hotéis por cidade
      break;
    case 3:
      fazerReserva(); // Faz uma reserva
      break;
    case 4:
      cancelarReserva(); // Cancela uma reserva
      break;
    case 5:
      listarReservas(); // Lista as reservas
      break;
    case 6:
      console.log("Saindo do sistema...");
      process.exit(); // Sai do programa
    default:
      console.log("Opção inválida."); // Mensagem para opção inválida
  }
}