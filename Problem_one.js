//1) Crie um programa que peça os dados de um cliente: Nome, idade,
// nacionalidade, endereço. Após digitados os dados, mostrar na tela a 
//seguinte mensagem "Cliente [Nome], com [idade] anos, [nacionalidade],
// reside no endereço [endereço]". Exemplo: Cliente Lucas, com 29 anos,
//brasileiro, reside no endereço Rua Victor Meirelles, 281, Centro, Florianópolis.
let nome, nacionalidade, endereco
let idade

nome=prompt('Digite seu nome: ')
nacionalidade=prompt('Digite sua nacionalidade: ')
endereco=prompt('Digite seu endereço: ')
idade=Number(prompt('Digite sua idade: '))

alert('Cliente: '+ nome+'\n'+
'Idade: '+ idade+'\n'+
'Nacionalidade: '+ nacionalidade+'\n'+
'Endereço: '+ endereco+'\n')
