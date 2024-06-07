const prompt = require('prompt-sync')();

// Estrutura de dados
let hoteis = [];
let reservas = [];

let idHotel = 1;
let idReserva = 1;

// Funções
function adicionarHotel() {
  const nome = prompt("Digite o nome do hotel:");
  const cidade = prompt("Digite a cidade do hotel:");
  const quartosTotais = parseInt(prompt("Digite o número total de quartos:"));

  hoteis.push({
    id: idHotel++,
    nome: nome,
    cidade: cidade,
    quartosTotais: quartosTotais,
    quartosDisponiveis: quartosTotais,
  });

  console.log("Hotel adicionado com sucesso!");
}

function buscarHoteisPorCidade() {
  const cidade = prompt("Digite a cidade que deseja procurar:");
  const hoteisEncontrados = hoteis.filter((hotel) => hotel.cidade === cidade);

  if (hoteisEncontrados.length > 0) {
    console.log("Hoteis encontrados em " + cidade + ":");
    hoteisEncontrados.forEach((hotel) => {
      console.log(
        "ID: " +
          hotel.id +
          ", Nome: " +
          hotel.nome +
          ", Quartos Disponíveis: " +
          hotel.quartosDisponiveis
      );
    });
  } else {
    console.log("Nenhum hotel encontrado em " + cidade + ".");
  }
}

function fazerReserva() {
  const idHotel = parseInt(prompt("Digite o ID do hotel:"));
  const nomeCliente = prompt("Digite o nome do cliente:");
  const hotel = hoteis.find((hotel) => hotel.id === idHotel);

  if (hotel) {
    if (hotel.quartosDisponiveis > 0) {
      hotel.quartosDisponiveis--;
      reservas.push({
        idReserva: idReserva++,
        idHotel: idHotel,
        nomeCliente: nomeCliente,
      });
      console.log("Reserva feita com sucesso!");
    } else {
      console.log("Não há quartos disponíveis neste hotel.");
    }
  } else {
    console.log("Hotel não encontrado.");
  }
}

function cancelarReserva() {
  const idReserva = parseInt(prompt("Digite o ID da reserva que deseja cancelar:"));
  const reserva = reservas.find((reserva) => reserva.idReserva === idReserva);

  if (reserva) {
    const hotel = hoteis.find((hotel) => hotel.id === reserva.idHotel);
    if (hotel) {
      hotel.quartosDisponiveis++;
      reservas = reservas.filter(
        (r) => r.idReserva !== reserva.idReserva
      );
      console.log("Reserva cancelada com sucesso!");
    } else {
      console.log("Hotel não encontrado.");
    }
  } else {
    console.log("Reserva não encontrada.");
  }
}

function listarReservas() {
  if (reservas.length > 0) {
    console.log("Lista de Reservas:");
    reservas.forEach((reserva) => {
      const hotel = hoteis.find((hotel) => hotel.id === reserva.idHotel);
      if (hotel) {
        console.log(
          "ID da Reserva: " +
            reserva.idReserva +
            ", Hotel: " +
            hotel.nome +
            ", Cliente: " +
            reserva.nomeCliente
        );
      } else {
        console.log("Hotel não encontrado.");
      }
    });
  } else {
    console.log("Não há reservas no sistema.");
  }
}

// Menu de Interação
while (true) {
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
      adicionarHotel();
      break;
    case 2:
      buscarHoteisPorCidade();
      break;
    case 3:
      fazerReserva();
      break;
    case 4:
      cancelarReserva();
      break;
    case 5:
      listarReservas();
      break;
    case 6:
      console.log("Saindo do sistema...");
      process.exit();
    default:
      console.log("Opção inválida.");
  }
}