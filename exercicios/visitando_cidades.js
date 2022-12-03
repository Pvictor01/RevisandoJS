/*Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.*/

const touristName = prompt('Informe o nome do turista');

let question = prompt('O turista já visitou alguma cidade? \n1- SIM \n2- NÃO');

let result = [];
let count = 0;

while(question == 1) {
  let city = prompt('Informe o nome da cidade visitada pelo turista');
  result += city + '\n';
  count ++;

  question = prompt('O turista já visitou mais alguma cidade? \n1- SIM \n2- NÃO');

  if(question == 2) {
    break;
  };
};

alert(`O nome do Turista é: ${touristName}; \nAs cidades visitas por ele foram: \n${result} \nA quantidade de cidades visitadas foi de: ${count}`);