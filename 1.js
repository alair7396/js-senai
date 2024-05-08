/*Faça um programa no qual o usuário digite a cor que está no semáforo (verde, amarelo, vermelho). Caso seja digitado verde, mostre na tela "Pode seguir!", se for digitado amarelo, mostre "Alerta, pare!" e se for digitado vermelho, mostre "Pare imediatamente!".*/

let cor

cor=prompt('Digite a cor do semáforo: ')

switch(cor){
    case 'verde':
        alert('Pode seguir! ')
        break;
    case 'amarelo':
        alert('Alerta, pare!')
        break;
    case 'vermelho':
        alert('Pare imediatamente! ')
        break;
}