/*Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)*/

const veiculoA = prompt('Digite o nome do primeiro veículo');
const velocidadeA = prompt('Informe a velocidade do primeiro veículo');

const veiculoB = prompt('Digite o nome do segundo veículo');
const velocidadeB = prompt('Informe a velocidade do segundo veículo');

const velocityA = parseFloat(velocidadeA);
const velocityB = parseFloat(velocidadeB);

if(velocityA > velocityB) {
  alert('O veículo (A) é mais rápido! \n Veículo A: ' + velocidadeA + 'Km/h' + '\n Veículo B: ' + velocidadeB + 'Km/h');
} else if(velocityB > velocityA) {
  alert('O veículo (B) é mais rápido! \n Veículo B: ' + velocidadeB + 'Km/h' + '\n Veículo A: ' + velocidadeA + 'Km/h');
} else if(velocityA == velocityB){
  alert('Os dois veículos estão na mesma velocidade \n Veículo A: ' + velocidadeA + 'Km/h' + '\n Veículo B: ' + velocidadeB + 'Km/h')
};