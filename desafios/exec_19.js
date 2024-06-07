/*
19. Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.
*/

const prompt = require('prompt-sync')();

function lerHorario() {
    for(let i = 0; i < 5; i++) {
        let horario;
        let valido = false;

        while (!valido) {
            horario = prompt(`Digite o ${i + 1}º horário (HH:MM:SS): `);
            let partes = horario.split(':');

            if (partes.length === 3) {
                let horas = parseInt(partes[0]);
                let minutos = parseInt(partes[1]);
                let segundos = parseInt(partes[2]);

                if (!isNaN(horas) && !isNaN(minutos) && !isNaN(segundos) && horas >= 0 && horas <= 23 && minutos >= 0 && minutos <= 59 && segundos >= 0 && segundos <= 59) {
                    valido = true;
                }
            }

            if (!valido) {
                console.log("Formato inválido! Por favor, insira no formato HH:MM:SS.");
            }
        }

        console.log(`Horário ${i + 1}: ${horario}`);
    }
}

lerHorario();
