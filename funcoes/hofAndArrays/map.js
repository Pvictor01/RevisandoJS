//tornando strings do array em maiusculas com map.
let frutas = ['Maçã', 'Banana', 'cacau', 'alcerola'];

let upcased = frutas.map(item => {
  return item.toUpperCase();
});

console.log(frutas);
console.log(upcased);

//multiplicando itens do array
let numbers = [1, 2, 3, 4, 3];

let multiplicate = numbers.map(function(item) {
  return item * 10;
});

console.log(numbers);
console.log(multiplicate);

//MAP - permite obter um novo array a partir de um array existente
const characters = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

/*const names = [];

for(let i = 0; i < characters.length; i++) {
  names.push(characters[i].nome);
};

console.log(names);*/

const names = characters.map(function(character) {
  return character.nome;
});

console.log(names);