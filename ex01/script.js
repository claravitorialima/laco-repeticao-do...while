let senhaCorreta = "1234"; 
let senhaDigitada = "";

do {
    senhaDigitada = prompt("Digite a senha, por gentileza:");
    // !== significa "o que o usuário digitou é diferente de"
    if (senhaDigitada !== senhaCorreta) {
        alert("Senha incorreta! Tente novamente");
    }
} while (senhaDigitada !== senhaCorreta);

alert("Acesso Permitido!");