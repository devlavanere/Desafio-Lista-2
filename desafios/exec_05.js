/*
5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).
*/
const prompt = require('prompt-sync')();

// Define uma função chamada 'jogarPedraPapelTesoura' para executar o jogo.
function jogarPedraPapelTesoura() {
    let jogador1Pontos = 0; // Inicializa a pontuação do jogador 1 como 0.
    let jogador2Pontos = 0; // Inicializa a pontuação do jogador 2 como 0.

    // Loop para executar três rodadas do jogo.
    for (let rodada = 1; rodada <= 3; rodada++) {
        console.log(`Rodada ${rodada}:`); //Imprime o número da rodada atual.

        const escolhaJogador1 = prompt('Jogador 1, escolha: pedra, papel ou tesoura:').toLowerCase();
        const escolhaJogador2 = prompt('Jogador 2, escolha: pedra, papel ou tesoura:').toLowerCase();

        // Verifica o resultado da rodada:
        if (escolhaJogador1 === escolhaJogador2) {
            console.log('Empate nesta rodada!');
        } else if (
            // Se o jogador 1 escolheu pedra e o jogador 2 escolheu tesoura, jogador 1 ganha.
            (escolhaJogador1 === 'pedra' && escolhaJogador2 === 'tesoura') ||
            // Se o jogador 1 escolheu papel e o jogador 2 escolheu pedra, jogador 1 ganha.
            (escolhaJogador1 === 'papel' && escolhaJogador2 === 'pedra') ||
            // Se o jogador 1 escolheu tesoura e o jogador 2 escolheu papel, jogador 1 ganha.
            (escolhaJogador1 === 'tesoura' && escolhaJogador2 === 'papel')
        ) {
            console.log('Jogador 1 ganhou esta rodada!');
            jogador1Pontos++;  // Incrementa a pontuação do jogador 1 em 1.
        } else {
            console.log('Jogador 2 ganhou esta rodada!');
            jogador2Pontos++; // Incrementa a pontuação do jogador 2 em 1.
        }
    }

    console.log('--- Resultado Final ---');
    console.log(`Pontuação do Jogador 1: ${jogador1Pontos}`);
    console.log(`Pontuação do Jogador 2: ${jogador2Pontos}`);

    // Verifica o vencedor do jogo:
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



