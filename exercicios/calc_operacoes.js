/*
Programa que permita inserir dois valores numéricos e calcule o resultado das 4 operações básicas
*/

let valueA = prompt('Insira o primeiro valor numérico');
let valueB = prompt('Insira o segundo valor numérico');

alert(`O resultado da soma dos dois valores é ${parseFloat(valueA) + parseFloat(valueB)};
\nO resultado da subtração dos dois valores é ${valueA - valueB};
\nO resultado da divisão dos dois valores é ${valueA / valueB};
\n resultado da multiplicação dos dois valores é ${valueA * valueB}`);