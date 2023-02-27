/*## Fila de Espera
Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.*/

let row = [];
let option = '';

do {
  let patients = '';

  for(let i = 0; i < row.length; i++) {
    patients += (i + 1) + '°- ' + row[i] + '\n'
  };

  option = prompt(`Pacientes:\n${patients} Escolha uma das opções: \n1- Novo paciente \n2- Consultar paciente \n3- Sair`);

  switch(option) {
    case '1':
      let addPatient = prompt('Informe o nome do novo paciente')
      row.push(addPatient)
      break;  
    case '2':
      let removePatient = row.shift()
      if(!removePatient) {
        alert('Não há pacientes na fila!')
      } else {
        alert(removePatient + ' foi removido da fila')
      };
      break;   
    case '3':
      alert('Programa encerrado!')
      break;    
    default:
      alert('Opção inválida')
      break;
  };
} while (option !== '3');
