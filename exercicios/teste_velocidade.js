const veiculoA = prompt('Digite o nome do primeiro veículo');
const velocidadeA = prompt('Informe a velocidade do primeiro veículo');

const veiculoB = prompt('Digite o nome do segundo veículo');
const velocidadeB = prompt('Informe a velocidade do segundo veículo');

const velocitA = parseInt(velocidadeA);
const velocitB = parseInt(velocidadeB);

if(velocitA > velocitB) {
    alert('O veículo A é mais rápido! \n Veículo A: ' + velocidadeA + 'Km/h' + '\n Veículo B: ' + velocidadeB + 'Km/h');
} else if(velocitB > velocitA) {
    alert('O veículo B é mais rápido! \n Veículo B: ' + velocidadeB + 'Km/h' + '\n Veículo A: ' + velocidadeA + 'Km/h');
} else if(velocitA == velocitB){
    alert('Os dois veículos estão na mesma velocidade \n Veículo A: ' + velocidadeA + 'Km/h' + '\n Veículo B: ' + velocidadeB + 'Km/h')
};