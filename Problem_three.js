//3) Desenvolva uma programação que peça ao usuário para digitar o 
//ano do seu nascimento no formato (YYYY) e o ano atual também no 
//formato (YYYY). Em seguida mostre na tela qual a idade do usuário 
//em anos, em meses, em dias e em semanas. 
let year_born, year_current, age, days, weeks, month

year_born=Number(prompt('Write the year of birth: '))
year_current=Number(prompt('Write the current year: '))
age=year_current-year_born
days=age*365
weeks=days/7
month=age*12

alert('Your age is: '+age+'\n'
+'Exactly:\n'
+ month +' Month. \n'
+ weeks +' Weeks.\n'
+ days  +' Days.')



