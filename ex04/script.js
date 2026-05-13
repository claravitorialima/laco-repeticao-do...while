let nomeProduto;

do{
    nomeProduto = prompt("Cadastre o nome do produto (minímo 3 caracteres)");
    // Conta quantos caracteres o texto possui
    if (nomeProduto.length < 3){
        alert("Nome inválido, o produto deve ter no mínimo 3 caracteres"); 
    }
} while (nomeProduto.length < 3);
alert("Produto " + nomeProduto + " cadastro com sucesso!");