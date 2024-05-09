/* Faça um programa do qual o usuário digite quatro números e ao final mostre o maior número, o menor número, e a soma dos outros dois números (que não são o maior nem o menor). Caso existam números repetidos digitados, após o usuário digitar os quatro números, não mostrar maior, menor nem soma, mas sim uma mensagem "Você digitou números repetidos". */
let numero1,numero2,numero3,numero4,contador=0,media,maior_numero=0,soma=0,menor_numero=0,somafinal=0

numero1=Number(prompt('Digite um número: '))
numero2=Number(prompt('Digite um número: '))
numero3=Number(prompt('Digite um número: '))
numero4=Number(prompt('Digite um número: '))
somafinal=(numero1+numero2+numero3+numero4)-(maior_numero+menor_numero)

while(contador<5){
    contador++
   if (contador==1){
    soma=soma+numero1
    media=soma/contador
        if(numero1>=media){
            maior_numero=numero1
            menor_numero=numero1
    }
} 
   if (contador==2){
    soma=soma+numero2
    media=soma/contador
        if(numero2>media){
            maior_numero=numero2
        }
        if(numero1>numero2){
            menor_numero=numero2
    }
} 
   if (contador==3){
    soma=soma+numero3
    media=soma/contador
        if(numero3>media){
            maior_numero=numero3
        }
        if(numero2>numero3){
    }    menor_numero=numero3  
}
   if (contador==4){
    soma=soma+numero4
    media=soma/contador
        if(numero4>media){
            maior_numero=numero4
        }
        if(numero3>numero4){
            menor_numero=numero4
    }  
}
}
if(numero1==numero2 || numero2==numero3|| numero3==numero4||numero4==numero2||numero4==numero1||numero1==numero3){
    alert('tem numeros repetidos')
}
else{
alert('o maior numero é:'+maior_numero+'\n o menor numero é:   '+ menor_numero+'\n a soma dos dois ultimos numeros é: '+somafinal)
}