/*10) Em uma máquina de cassino, ao jogar o jogador sempre ganha. Em cada 'partida' o jogador pode formar sequências de frutas que rendem valores em dinheiro. Criar um programa que pergunte ao jogador as três frutas sorteadas e mostre o valor ganho de acordo com a tabela a seguir.

   CEREJA - CEREJA - CEREJA -> R$100
   LARANJA - LARANJA - LARANJA -> R$80
   CEREJA - LARANJA - CEREJA -> R$50
   LARANJA - CEREJA - LARANJA -> R$25*/

    let fruta1,fruta2,fruta3

    fruta1=(prompt('Digite a fruta: '))
    fruta2=(prompt('Digite a fruta: '))
    fruta3=(prompt('Digite a fruta: '))

    if(fruta1=='cereja'&&fruta2=='cereja'&&fruta3=='cereja'){
        alert('Você ganhou 100reais')
    }
    if(fruta1=='laranja'&&fruta2=='laranja'&&fruta3=='laranja'){
        alert('Você ganhou 80reais')
    }
    if(fruta1=='cereja'&&fruta2=='laranja'&&fruta3=='cereja'){
        alert('Você ganhou 50reais')
    }
    if(fruta1=='laranja'&&fruta2=='cereja'&&fruta3=='laranja'){
        alert('Você ganhou 25reais')
    }


       
      
       
    



