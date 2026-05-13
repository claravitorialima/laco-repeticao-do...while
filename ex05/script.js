let totalPedido = 0;
let opcao;

do{
    opcao = prompt(
        "Seja bem vindo a cafeteria \n" +
        " MENU DA CAFETERIA \n" +
        "1 - Café Expresso(R$5,00) \n" +
        "2 - Cappuccino (R$7,00) \n" +
        "3 - Pão de Queijo (R$4,00) \n" +
        "0 - Finalizar Pedido\n\n" +
        "Escolha uma opção:"
    );
    switch (opcao){
        // Define qual variável testar
        case "1":
            // Define o valor que está procurando
            totalPedido += 5.00;
            alert("Café expresso adicionado ao pedido!");
            // Garante que apenas o código desse caso seja executado e que o programa saia da estrutura logo em seguida
            break
        case "2":
            totalPedido += 7.00;
            alert("Cappuccino adicionado ao pedido!");
            break
        case "3":
            totalPedido += 4.00
            alert("Pão de Queijo adicionado ao pedido!");
            break
        case "0":
            // Não faz nada, apenas sai do swich sem erro
            break
        default:
            //Caso o usuário digite qualquer outra coisa
            alert("Opção inválida");
            break
    }
}while (opcao !== "0"); 
// O laço continua até que a opção seja 0
alert("Pedido finalizado com sucesso! O total da sua conta é R$ " + totalPedido.toFixed(2));