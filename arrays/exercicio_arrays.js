//Exercicio para filtrar informações como número de tripulantes e nome das naves.
const hitchedSpaceships = [
  ["Fenix", 8, true],//Nome, número de tripulantes e informação se a nave está engatada.
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwth", 15, false]
];    

const overNineCrew = hitchedSpaceships.filter(index => {
  return index[1] > 9;
}).map(spaseship => {
  return spaseship[0];
});

const pendentHitch = hitchedSpaceships.findIndex(index => {
  if(index[2] == false) {
    return index
  };
});

console.log(pendentHitch);

const upperCase = hitchedSpaceships.map(index => {
  return index[0].toUpperCase();
});

const menu = (` PAINEL DE INFORMAÇÃO
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwth", 15, false]
`);

const message = (`${menu} \nNaves com mais de 9 tripulantes: ${overNineCrew.join(', ')} \n\nPosição da primeira nave com engate pendente: ${pendentHitch + 1} \n\nNome das naves: ${upperCase.join(', ')}`);

alert(message);