/*Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.*/
let initialMoney = parseFloat(prompt('Informe a quantidade de dinheiro disponível'));
let manageMoney = '';

do {
  manageMoney = prompt(
    'A quantidade de dinheiro disponível é: ' + initialMoney + ' R$' + 
    '\nDigite 1 para adicionar \nDigite 2 para remover \nDigite 3 para Sair'
  )

  switch (manageMoney) {
    case '1':
      initialMoney += parseFloat(prompt('Informe o valor a ser adicionado:'))
      break
    case '2':
      initialMoney -= prompt('Informe o valor a ser removido:')
      break 
    case '3':
      alert("Saindo...")
      break  
    default:
      alert('Opção inválida!')
      break
  }
} while (manageMoney !== '3');