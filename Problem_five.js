// 5) Uma cidade pretende apurar os votos de sua eleição. 
//Faça um programa para ler o número total de eleitores. 
//Em seguida o número de votos do candidato X, o número de votos do 
//candidato Y, total de votos brancos e total de votos nulos 
//(a soma desses quatro, deve ser igual ao total de eleitores). 
//Calcular e escrever o percentual que cada um representa em 
//relação ao total de eleitores. 

let total_number_of_the_voters, candidateX, candidateY, white, nulls,
one_percent


total_number_of_the_voters=Number(prompt('Write total_number_of_the_voters: '))
candidateX=Number(prompt('Write of number the candidateX: '))
candidateY=Number(prompt('White of number the candidateY: '))
white=Number(prompt('White of white vote: '))
nulls=Number(prompt('White of nulls vote: '))
if (candidateX+candidateY+white+nulls==total_number_of_the_voters){
  one_percent=total_number_of_the_voters/100  
  one_percent*candidateX
  one_percent*candidateY
  one_percent*white
  one_percent*nulls

alert('Procentagem do candidato x: '+candidateX+'%\n'+
    'Procentagem do candidato y: '+candidateY+'%\n'+
    'Procentagem de votos em branco: '+white+'%\n'+
    'Procentagem de votos nulos: '+nulls+'%\n')
}
else{
    alert('Error\nA soma desses quatro, deve ser igual ao total de eleitores!!')
}
