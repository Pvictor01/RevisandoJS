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