// FILTER: permite obter um novo array contendo apenas elementos específicos de um array existente
const characters = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

const orcs = [];

for (let i = 0; i < characters.length; i++) {
  if(characters[i].raca === 'Orc') {
    orcs.push(characters[i])
  };
};

console.log(orcs);

const resultWithFilter = characters.filter(function(character) {
  return character.raca === 'Orc';
});

console.log(resultWithFilter);

//retornar os itens que possuem mais de 5 caracteres com filter
let frutas = ['Maçã', 'Banana', 'cacau', 'alcerola'];

let with5chars = frutas.filter(element => { return element.length >= 5});

console.log(with5chars);