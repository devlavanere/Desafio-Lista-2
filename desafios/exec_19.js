/*
19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.
*/

const prompt = require('prompt-sync')();

function lerHorario() {
    const horarios = []; //Armazenar os horários válidos
  
    for (let i = 0; i < 5; i++) {
      let horario;
      let valido = false; //Declara a variável valido para controlar a validação do formato
      
      //Loop que continua até que um horário válido seja inserido
      while (!valido) {
        horario = prompt(`Digite o ${i + 1}º horário (HH:MM:SS): `);
        let partes = horario.split(':');
        
        //Verifica se o horário foi dividido em 3 partes (horas, minutos e segundos)
        if (partes.length === 3) {
          let horas = parseInt(partes[0]);
          let minutos = parseInt(partes[1]);
          let segundos = parseInt(partes[2]);
          
          //Verifica se as horas, minutos e segundos são números válidos e se estão dentro do intervalo correto (horas, minutos, segundos)
          if (!isNaN(horas) && !isNaN(minutos) && !isNaN(segundos) && 
              horas >= 0 && horas <= 23 && 
              minutos >= 0 && minutos <= 59 && 
              segundos >= 0 && segundos <= 59) {
            valido = true;
          } else {
            console.log("Horário inválido! Por favor, insira horas entre 0 e 23, minutos entre 0 e 59, e segundos entre 0 e 59.");
          }
        } else {
          console.log("Formato inválido! Por favor, insira no formato HH:MM:SS.");
        }
      }
  
      horarios.push(horario);
      console.log(`Horário ${i + 1}: ${horario}`);
    }
  
    return horarios;
  }
  
  const horariosValidados = lerHorario();
  console.log("\nHorários válidos:");
  horariosValidados.forEach(horario => console.log(horario));












