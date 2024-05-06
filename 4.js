/* Desenvolva um programa que pergunte ao usuário o número da sua conta bancária e o tipo de operação a ser realizada: 1) Saldo 2) Depósito 3) Saque. Nas opções de depósito e saque, perguntar o valor a ser depositado ou sacado e mostrar o saldo atualizado na tela. Na opção saldo, apenas mostrar o saldo atual na tela. Considere que um saque só pode ser realizado caso haja saldo suficiente. Criar uma variável com um valor que represente o saldo inicial.*/

let numero_banco, operacao, saque, saldo=20000, saldo_atual, deposito, saldo_depositado

numero_banco=Number(prompt('Digite o número da sua conta bancária: '))

operacao=Number(prompt('1) Saldo\n 2) Depósito\n 3) Saque\n'))

switch(operacao){
    case 1:
        alert('Seu saldo é de R$:20.000 ')
        break;
    case 2:
        saque=Number(prompt('Digite o valor do saque: '))
        if (saque>saldo){
            alert('Saldo insuficiênte!"')
        }
        else if(saque<saldo){
            saldo_atual=saldo-saque
            alert('Seu saldo atual após o saque é de: R$:'+ saldo_atual+'Reais')
        }
        break;
    case 3:
        deposito=Number(prompt('Digite o valor a ser depositado: '))
        saldo_depositado=saldo+deposito
        alert('Seu saldo atual após o deposito é de: R$:'+ saldo_depositado+'Reais')
        break;
    }