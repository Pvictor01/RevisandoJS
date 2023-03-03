/*## Cadastro de Imóveis
Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos.*/

let properties = [];
let menu = '';

do{
  menu = prompt(
    `Imóveis cadastrados: ${properties.length}
    \n1- Cadastrar um imóvel 
    \n2- Mostrar imóveis cadastrados 
    \n3- Sair`
  );

  switch(menu) {
    case '1':
      const property = {}; 
      
      property.name = prompt('Informe o nome do proprietário do imóvel');   
      property.bedrooms = parseFloat(prompt('Informe a quantidade de quartos do imóvel'));
      property.bathrooms = parseFloat(prompt('Informe a quantidade de banheiros do imóvel'));
      property.garage = prompt('O imóvel possui garagem? (SIM/NÃO)');

      properties.push(property);
      break;
    case '2':
      for(let i = 0; i < properties.length; i++) {
        alert(`
          Imovel: ${i + 1};
          Proprietário: ${properties[i].name};
          Quartos: ${properties[i].bedrooms};
          Banheiros: ${properties[i].bathrooms};
          Possui garagem?: ${properties[i].garage}
        `);
      };
      break;
    case '3':
      alert('Programa encerrado!');
      break;
    default:
      alert('Opção inválida');
      break;     
  };
} while (menu !== '3');