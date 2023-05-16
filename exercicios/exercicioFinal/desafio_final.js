/*Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:

- Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema
    - Listar vagas disponíveis
    - Criar um nova vaga
    - Visualizar uma vaga
    - Inscrever um candidato em uma vaga
    - Excluir uma vaga
    - Sair
- A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
- A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
- A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
- A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
- A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.

Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.*/
let vacancies = [];

function listVacancies() {
 const vacanciesInText = vacancies.reduce((finalText, vacancy, index) => {
   finalText += index + '. '
   finalText += vacancy.name
   finalText += ' (' + vacancy.candidates.length + ' candidatos)\n'
   return finalText
 }, '');

 alert(vacanciesInText);
};   

function newVacancy() {
 const name = prompt("Informe um nome para a vaga:");
 const description = prompt("Informe um descrição para a vaga:");
 const limitDate = prompt("Informe um data limite (dd/mm/aaaa) para a vaga:");

 const confirmation = confirm(
   'Deseja criar uma nova vaga com essas informações?\n' +
   'Nome: ' + name + '\nDescrição: ' + description + '\nData limite :' + limitDate
 );

 if(confirmation) {
   const newVacancy = {name, description, limitDate, candidates: []} //name = name ...
   vacancies.push(newVacancy)
   alert('Vaga criada!')
 };  
};

function displayVacancy() {
 const index = prompt('Informe o índice da vaga que deseja exibir:');

 if(index >= vacancies.length && index < 0) {
   alert('Opção inválida!')
   return
 };

 const vacancy = vacancies[index];

 const candidatesInText = vacancy.candidates.reduce(function(finalText, candidate) {
   return finalText + '\n - ' + candidate
 }, '');

 alert(
   'Vaga n° ' + index +
   '\nNome: ' + vacancy.name +
   '\nDescrição: ' + vacancy.description +
   '\nData limite: ' + vacancy.limitDate +
   '\nQuantidade de candidatos: ' + vacancy.candidates.length +
   '\nCandidatos inscritos: ' + candidatesInText
 );
};

function enrollCandidate() {
 const candidate = prompt('Informe o nome do(a) candidato(a):');
 const index = prompt('Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:');
 const vacancy = vacancies[index];

 const confirmation = confirm(
   'Deseja inscrever o candidato ' + candidate + ' na vaga ' + index + '?\n' +
   'Nome: ' + vacancy.name + '\nDescrição: ' + vacancy.description + '\nData limite: ' + vacancy.limitDate
 );

 if(confirmation) { 
   vacancy.candidates.push(candidate)
   alert('Incrição realizada')
 };
};

function deleteVacancy() {
 const index = prompt('Informe o índice da vaga que deseja excluir:');
 const vacancy = vacancies[index];

 const confirmation = confirm(
   'Tem certeza que deseja excluir a vaga: ' + index + '?\n' +
   'Nome: ' + vacancy.name + '\nDescrição: ' + vacancy.description + '\nData limite: ' + vacancy.limitDate
 );

 if(confirmation) {
   vacancies.splice(index, 1)
   alert('Vaga excluída.')
 };
};

function showMenu() {
 const option = prompt(
   "Cadastro de Vagas de Emprego" +
   "\n\nEscolha uma das opções" +
   "\n1. Listar vagas disponíveis" +
   "\n2. Criar uma nova vaga" +
   "\n3. Visualizar uma vaga" +
   "\n4. Inscrever um(a) candidato(a)" +
   "\n5. Excluir uma vaga" +
   "\n6. Sair"
 );

 return option;
};

function execute() {
 let option = '';

 do{
   option = showMenu();

   switch(option) {
     case '1':
       listVacancies()
       break;
     case '2':
       newVacancy()
       break;
     case '3':
       displayVacancy()
       break;
     case '4':
       enrollCandidate()
       break;
     case '5':
       deleteVacancy()
       break;
     case '6':
       alert('Saindo')
       break;
     default:
       alert('Opção inválida.')
   };
 } while(option !== '6');
};

execute();