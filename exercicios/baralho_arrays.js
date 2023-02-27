/*Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.*/
let cards = [];
let options = '';

do{
  options = prompt('Cartas no baralho: ' + cards.length + '\nEscolha uma das opções: \n1- Adicionar uma carta \n2- Puxar uma carta \n3- Sair');

  switch(options) {
    case '1':
      let addCards = prompt('Informe a carta que deseja adicionar');
      cards.push(addCards)
      break;
    case '2':
      let removeCard = cards.pop()
      if(!removeCard) {
        alert('Não há cartas no baralho')
      } else {
        alert('A seguinte carta foi removida do baralho: ' + removeCard)
      };
      break;
    case '3':
      alert('Programa encerrado!')  
      break;
    default:
      alert('Opção inválida!')  
      break;
  };

} while(options !== '3');