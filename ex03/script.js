let numSecreto = 7;
let palpite; 
// O contador começa em 0
let tentativas = 0;

do{
    palpite = parseFloat(prompt("Bem vindo ao jogo de adivinhação! Insira o número que você acha que é o secreto entre 1 e 10"));
    // Adiciona o contador de tentativas a cada rodada
    tentativas ++
    // !== Significa que o palpite digitado é diferente de numSecreto
    if (palpite !== numSecreto){
        alert("Palpite errado, que pena! Tente novamente");
    }
} while (palpite !== numSecreto);
alert("Parabéns! Você adivinhou o número " + numSecreto + " em " + tentativas + " tentativas");