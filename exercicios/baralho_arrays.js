/*Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.*/

let cards = ['Ás', ' 2', ' 3', ' 7', ' Dama'];

let menu = prompt(
  `LISTA DE CARTAS: 
  \n${cards}
  \nDigite 1 para adicionar uma carta
  \nDigite 2 para puxar uma carta 
  \nDigite 3 para Sair`
);

while (menu != 3) {
  if (menu == 1) {
    let addLetter = prompt('Informe o nome da carta que deseja adicionar');
    cards.push(' ' + addLetter);
    menu = prompt(
      `LISTA DE CARTAS: 
      \n${cards}
      \nDigite 1 para adicionar uma carta
      \nDigite 2 para puxar uma carta 
      \nDigite 3 para Sair`
    );
  } else if (menu == 2) {
    let removeLetter = cards.pop();
    menu = prompt(
      `\nO nome da carta puxada foi: ${removeLetter}
      \nLISTA DE CARTAS: 
      \n${cards}
      \nDigite 1 para adicionar uma carta
      \nDigite 2 para puxar uma carta 
      \nDigite 3 para Sair`
    );
  } else {
    menu = prompt(
      `Opção inválida
      \nLISTA DE CARTAS: 
      \n${cards}
      \nDigite 1 para adicionar uma carta
      \nDigite 2 para puxar uma carta 
      \nDigite 3 para Sair`
    );
  };
};

alert('Programa encerrado!');