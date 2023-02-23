/*Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

- milímetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetro (dam)
- hectômetro (hm)
- quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)
*/
let valueInMeters = prompt('Digite um valor em metros');

const options = prompt(
  `Escolha uma das unidades de medida para converter a metragem:
  \nMilímetro(mm); 
  \nCentímetro(cm); 
  \nDecímetro(dm); 
  \nDecâmetro(dam); 
  \nHectômetro(hm);     
  \nQuilômetro(km)`
);

let result = 0;

switch(options) {
  case 'mm':
    result = valueInMeters * 1000
    alert(`A unidade escolhida foi milímetro \nA metragem de ${valueInMeters}m, convertida é: ${result} milímetros`);
    break;
  case 'cm':
    result = valueInMeters * 100
    alert(`A unidade escolhida foi centímetro \nA metragem de ${valueInMeters}m, convertida é: ${result} centímetros`);
    break;
  case 'dm':
    result = valueInMeters * 10
    alert(`A unidade escolhida foi decímetro \nA metragem de ${valueInMeters}m, convertida é: ${result} decímetros`);
    break;
  case 'dam':
    result = valueInMeters * 0.1
    alert(`A unidade escolhida foi decâmetro \nA metragem de ${valueInMeters}m, convertida é: ${result} decâmetros`);
    break;
  case 'hm':
    result = valueInMeters * 0.01  
    alert(`A unidade escolhida foi hectômetro \nA metragem de ${valueInMeters}m, convertida é: ${result} hectômetros`);
    break;
  case 'km':
    result = valueInMeters * 0.001 
    alert(`A unidade escolhida foi quilômetro \nA metragem de ${valueInMeters}m, convertida é: ${result} quilômetros`);
    break;
  default:
    alert('Opção inválida, escola uma das seguintes opções: mm, cm, dm, dam, hm, km')        
};