/*Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.*/

let initialMoney = prompt('Informe a quantidade de dinheiro disponível');
let money = parseInt(initialMoney);

let manageMoney = prompt('A quantidade de dinheiro disponível é: ' + money + '\nDigite 1 para adicionar \nDigite 2 para remover \nDigite 3 para Sair');

do {
  if (manageMoney == 1) {
    let addMoney = prompt('Digite a quantidade de dinheiro que deseja adicionar');
    let add = parseInt(addMoney);
    money += add;
    manageMoney = prompt('A quantidade de dinheiro disponível é: ' + money + ' R$' + '\nDigite 1 para adicionar \nDigite 2 para remover \nDigite 3 para Sair');
  } else if (manageMoney == 2) {
    let subtractMoney = prompt('Digite a quantidade de dinheiro que deseja retirar');
    let subtract = parseInt(subtractMoney);
    money -= subtract;
    manageMoney = prompt('A quantidade de dinheiro disponível é: ' + money + ' R$' + '\nDigite 1 para adicionar \nDigite 2 para remover \nDigite 3 para Sair');
  } else {
    manageMoney = prompt('OPÇÃO INVÁLIDA \nA quantidade de dinheiro disponível é: ' + money + ' R$' + '\nDigite 1 paraadicionar \nDigite 2 para remover \nDigite 3 para Sair');
  };
} while (manageMoney != 3);

alert('Programa encerrado! \n A quantidade final de dinheiro foi de: ' + money + ' R$');