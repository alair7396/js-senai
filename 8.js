/*8) Uma feira está realizando promoção na compra de ovos. Os ovos custam 40 centavos cada, se forem comprados até 12 (uma dúzia), 30 centavos cada, se forem comprados de 13 a 24 (até duas dúzias) e 25 centavos cada, caso sejam comprados mais que duas dúzias. Faça um programa que leia o número de ovos comprados, calcule e mostre na tela o valor total da compra. */
let ovos,valor,reais

ovos=Number(prompt('Digite quantos ovos você deseja: '))

switch(true){
    case (ovos<=12):{
       valor=ovos*0.40
       alert('Valor a pagar pelos ovos são de:R$: '+valor+'Reais')
       break;
    }
    case (ovos>12&&ovos<=24):{
        valor=ovos*0.30
        alert('Valor a pagar pelos ovos são de:R$: '+valor+'Reais')
        break;
     }
     case (ovos>24):{
        valor=ovos*0.25
        alert('Valor a pagar pelos ovos são de:\n R$: '+valor+'Reais')
        break;
     }
}