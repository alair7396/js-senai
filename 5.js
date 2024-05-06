/*Em um determinado e-commerce, o frete para produtos possui o valor fixo de R$12,50. A loja possui benefícios para assinantes em três categorias: 1) Assinante Premium, ganha 20% de desconto e frete grátis 2) Assinante Gold, ganha 20% de desconto mas paga frete 3) Assinante Silver, ganha 10% de desconto mas paga frete. 4) Não assinante, sem benefícios. Faça um programa que solicite o valor da compra e a categoria de assinante (1, 2, 3 ou 4). Mostrar na tela o valor da compra de acordo com a opção escolhida.*/
let assinatura, valor_compra, desconto, valor_pagar

valor_compra=Number(prompt('Digite o valor da compra: '))
assinatura=Number(prompt('Digite o nivel de assinatura:\n 1(Premium);\n 2(Gold);\n 3(Silver);\n 4(Sem assinatura);\n'))

switch(assinatura){
    case 1:
        desconto=valor_compra*20/100
        valor_pagar=valor_compra-desconto
        alert('Valor a pagar é: '+valor_pagar)
        break;
    case 2:
        desconto=valor_compra*20/100
        valor_pagar=(valor_compra-desconto)+12.50
        alert('Valor a pagar é: '+valor_pagar)
        break;
    case 3:
        desconto=valor_compra*10/100
        valor_pagar=(valor_compra-desconto)+12.50
        alert('Valor a pagar é: '+valor_pagar)
        break;
    case 4:
        valor_pagar=(valor_compra-desconto)+12.50
        alert('Valor a pagar é: '+valor_pagar)
        break;      
}