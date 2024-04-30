/*Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos. O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. Digitar os valores (em metros) da largura e comprimento que deseja a piscina. Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50.*/

let largura, comprimento,area, numero_de_azulejo, caixa, valor

largura=prompt('digite a largura: ')
comprimento=prompt('digite o comprimento: ')

area=largura*comprimento
numero_de_azulejo=area*120
caixa=numero_de_azulejo/60
valor=caixa*45.50

alert('Deve ser comprado '+numero_de_azulejo+' azulejos.\nO valor total a ser pago é de R$: '+ valor+' Reais.')










