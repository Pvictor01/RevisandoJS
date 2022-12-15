/*## Fila de Espera
Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.*/

let row = ['Paulo', ' Victor', ' Lima', ' Jamilson'];

let menu = prompt(
  `LISTA DE PACIENTES: 
  \n${row}
  \nDigite 1 para adicionar um paciente a fila
  \nDigite 2 para atender um paciente 
  \nDigite 3 para Sair`  
); 

while(menu != 3) {
  if(menu == 1) {
    let addPatient = prompt('Informe o nome do paciente para adicionar a fila');
    row.push(' ' + addPatient);
    menu = prompt(
      `LISTA DE PACIENTES: 
      \n${row}
      \nDigite 1 para adicionar um paciente a fila
      \nDigite 2 para atender um paciente 
      \nDigite 3 para Sair`  
    );
  } else if(menu == 2) {
    let removePatient = row.shift();
    menu = prompt(
      `\nO nome do paciente consultado foi: ${removePatient}
      \nLISTA DE PACIENTES: 
      \n${row}
      \nDigite 1 para adicionar um paciente a fila
      \nDigite 2 para atender um paciente 
      \nDigite 3 para Sair`  
    );
  } else {
    menu = prompt(
      `Opção inválida
      \nLISTA DE PACIENTES: 
      \n${row}
      \nDigite 1 para adicionar um paciente a fila
      \nDigite 2 para atender um paciente 
      \nDigite 3 para Sair`  
    ); 
  };
};

alert('Programa encerrado!');