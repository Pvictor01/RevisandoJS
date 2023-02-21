/*
Programa que permita inserir dois valores numéricos e calcule o resultado das 4 operações básicas
*/

let valueA = prompt('Insira o primeiro valor numérico');
let valueB = prompt('Insira o segundo valor numérico');

const x = parseFloat(valueA);
const y = parseFloat(valueB);

const sum = x + y;
const subtraction = x - y;
const division = x / y;
const multiplication = x - y;

alert(`A soma dos valores é: ${sum}
\nA subitração dos valores é: ${subtraction}
\nA divisão dos valores é: ${division}
\nA multiplicação dos valores é: ${multiplication}`);