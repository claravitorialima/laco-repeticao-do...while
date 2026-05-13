let somaTotal = 0;
let continuar;

do{
    let numero = parseFloat (prompt("Insira um número inteiro por favor:"));
    // Verifica se o número digitado é realmente um número
    // ! identifica se aquele número for um número real
    if (!isNaN(numero)){
        somaTotal = somaTotal + numero
    } else {
        alert("Isso não é um número válido!");
    }
    // Transformar qualquer letra maiúscula em minúscula
    continuar = prompt("Deseja inserir outro número? (s/n)"). toLowerCase();
    // Condição de repetição
}while (continuar === "s");
alert ("A soma total é: " + somaTotal);