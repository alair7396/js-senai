/* Elabore um programa que leia três lados de um triângulo e mostre na tela se ele é equilátero, isósceles ou escaleno. Quando os três lados forem iguais trata-se de um triângulo equilátero, dois lados iguais é um triângulo isósceles e os três lados diferentes é um triângulo escaleno. */
 let lado1,lado2,lado3

 lado1=Number(prompt('Digite o valor do primeiro lado: '))
 lado2=Number(prompt('Digite o valor do segundo lado: '))
 lado3=Number(prompt('Digite o valor do terçeiro lado: '))

 switch(true){
    case(lado1==lado2&&lado3==lado1&&lado2==lado3):{
        alert('>>Esse triângulo é Equilátero<<')
        break;
    }
    case(lado1==lado2||lado1==lado3||lado2==lado3):{
        alert('>>Esse triângulo é Isóceles<<')
        break;
    }
    case(lado1!=lado2!=lado3!=lado1):{
        alert('>>Esse triângulo é Escaleno<<')
        break;
    }
 }