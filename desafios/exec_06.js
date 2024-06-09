/*
6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.
*/

const prompt = require('prompt-sync')();

function jogoDeAdvinhacao() {
    // Gera um número aleatório entre 1 e 5, armazenando esse numero na variável 'numeroSorteado'.
    const numeroSorteado = Math.floor(Math.random() * 5) + 1;
    let tentativasRestantes = 4;

    // Loop que continua enquanto o jogador tiver tentativas restantes.
    while (tentativasRestantes > 0) {
        const palpite = parseInt(prompt(`Tente adivinhar o número sorteado (entre 1 e 5). Tentativas restantes: ${tentativasRestantes}: `));

        // Verifica se o palpite é um número válido entre 1 e 5.
        if (palpite < 1 || palpite > 5 || isNaN(palpite)) {
            console.log('Por favor, insira um número válido entre 1 e 5.');
            continue;
        }
        // Verifica se o palpite é igual ao número sorteado.
        if (palpite === numeroSorteado) {
            console.log(`Parabéns! Você acertou o número sorteado (${numeroSorteado}).`);
            return;
        } else { // Se o palpite estiver errado.
            console.log('Você errou. Tente novamente!');
            tentativasRestantes--; // Decrementa o número de tentativas restantes em 1.
        }
    }

    // Se o jogador usou todas as tentativas e ainda não acertou
    return `Suas tentativas acabaram! O número sorteado era ${numeroSorteado}.`;
}

// Chamada da função para iniciar o jogo
jogoDeAdvinhacao();


