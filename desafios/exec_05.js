/*
5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/
const prompt = require('prompt-sync')();

function jogarPedraPapelTesoura() {
    let jogador1Pontos = 0;
    let jogador2Pontos = 0;

    for (let rodada = 1; rodada <= 3; rodada++) {
        console.log(`Rodada ${rodada}:`);

        const escolhaJogador1 = prompt('Jogador 1, escolha: pedra, papel ou tesoura:').toLowerCase();
        const escolhaJogador2 = prompt('Jogador 2, escolha: pedra, papel ou tesoura:').toLowerCase();

        if (escolhaJogador1 === escolhaJogador2) {
            console.log('Empate nesta rodada!');
        } else if (
            (escolhaJogador1 === 'pedra' && escolhaJogador2 === 'tesoura') ||
            (escolhaJogador1 === 'papel' && escolhaJogador2 === 'pedra') ||
            (escolhaJogador1 === 'tesoura' && escolhaJogador2 === 'papel')
        ) {
            console.log('Jogador 1 ganhou esta rodada!');
            jogador1Pontos++;
        } else {
            console.log('Jogador 2 ganhou esta rodada!');
            jogador2Pontos++;
        }
    }

    console.log('--- Resultado Final ---');
    console.log(`Pontuação do Jogador 1: ${jogador1Pontos}`);
    console.log(`Pontuação do Jogador 2: ${jogador2Pontos}`);

    if (jogador1Pontos > jogador2Pontos) {
        console.log('Jogador 1 é o vencedor!');
    } else if (jogador1Pontos < jogador2Pontos) {
        console.log('Jogador 2 é o vencedor!');
    } else {
        console.log('O jogo terminou em empate!');
    }
}

// Chamada da função para iniciar o jogo
jogarPedraPapelTesoura();
