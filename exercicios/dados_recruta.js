/*Programa que permita salvar informações de um recruta perguntando:
O primeiro nome
O sobrenome
O campo de estudo
O ano de nascimento
Depois o programa deve exibir o nome completo, seu campo de estudo e sua idade baseada apenas no ano de nascimento
*/

let firstName = prompt('Qual o nome do recruta?');
let lastName = prompt('Qual o sobrenome do recruta?');
let studyArea = prompt('Qual o campo de estudo do recruta?');
let yearOfBirth = prompt('Qual o ano de nascimento do recruta?');

alert(`O nome completo do recruta é: ${firstName} ${ lastName} 
\nO campo de estudo do recruta é: ${studyArea} 
\nA idade do recruta é: ${2022 - yearOfBirth} anos`);