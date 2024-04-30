/*Os leões baios são animais territoriais. Seu território compreende cerca de 320km² 
por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar 
uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em 
determinada reserva ambiental. Elaborar um programa no qual você deve digitar 
quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar 
na tela a soma geral de área dominada, incluindo todos indivíduos.*/
let casais, territorio_individual, area_dominada, casados=0, territorio

casais=Number(prompt('Digite quantos casais são: '))
casados=casados+casais
solteiro=14-casados-casados
territorio=casais*400
territorio_individual=solteiro*320
area_dominada=territorio_individual+territorio

alert('Area dominada é de ' + area_dominada+'Km')
    







