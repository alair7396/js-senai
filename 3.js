/*Criar um programa que informa quantos dias tem determinado mês (desconsiderando ano bissexto) do ano. Deve ser perguntado ao usuário o mês e a resposta deve ser numérica. Exemplo: Usuário digitou 3, que corresponde a março. Mostrar na tela "O mês possui 31 dias"*/

let mes

mes=Number(prompt('Digite o número referente ao mês desejado: '))

switch(mes){
    case 1:
     alert('31 Dias')
    break;
    case 2:         
     alert('29 Dias')
    break;
    case 3:         
     alert('31 Dias')
    break;
    case 4:          
     alert('30 Dias')
    break;
    case 5:          
     alert('31 Dias')
    break;
    case 6:          
     alert('30 Dias')
    break;
    case 7:         
     alert('31 Dias')
    break;
    case 8:          
     alert('30 Dias')
    break;
    case 9:         
     alert('31 Dias')
    break;
    case 10:         
     alert('30 Dias')
    break;
    case 11:         
     alert('31 Dias')
    break;
    case 12:         
     alert('30 Dias')
    break;
}
