/*Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.*/

let menu = prompt('ESCOLHA UMA DAS OPÇÕES DO MENU \n1- Açaí  \n2- Sorvete \n3- Bolo \n4- Pudim \n5- Encerrar');

do {
  if(menu == 1) {
    alert('Sobremesa escolhida foi Açaí');
    menu = prompt('ESCOLHA UMA DAS OPÇÕES DO MENU \n1- Açaí  \n2- Sorvete \n3- Bolo \n4- Pudim \n5- Encerrar');
  } else if(menu == 2) {
    alert('Sobremesa escolhida foi Sorvete');
    menu = prompt('ESCOLHA UMA DAS OPÇÕES DO MENU \n1- Açaí  \n2- Sorvete \n3- Bolo \n4- Pudim \n5- Encerrar');
  } else if(menu == 3) {
    alert('Sobremesa escolhida foi Bolo');
    menu = prompt('ESCOLHA UMA DAS OPÇÕES DO MENU \n1- Açaí  \n2- Sorvete \n3- Bolo \n4- Pudim \n5- Encerrar');
  } else if(menu == 4) {
    alert('Sobremesa escolhida foi Pudim');
    menu = prompt('ESCOLHA UMA DAS OPÇÕES DO MENU \n1- Açaí  \n2- Sorvete \n3- Bolo \n4- Pudim \n5- Encerrar');
  } else {
    menu = prompt('Opção inválida \nESCOLHA UMA DAS OPÇÕES DO MENU \n 1- Açaí  \n2- Sorvete \n3- Bolo \n4- Pudim \n5- Encerrar');
  };
} while (menu != 5);

alert('Programa encerrado!');