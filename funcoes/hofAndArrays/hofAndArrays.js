//High-Order Functions e Arrays - Parte 1
const characters = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

//MAP - permite obter um novo array a partir de um array existente
/*const names = [];

for(let i = 0; i < characters.length; i++) {
  names.push(characters[i].nome);
};

console.log(names);*/

const names = characters.map(function(character) {
  return character.nome;
});

console.log(names);

// FILTER: permite obter um novo array contendo apenas elementos específicos de um array existente
/*const orcs = [];

for (let i = 0; i < characters.length; i++) {
  if(characters[i].raca === 'Orc') {
    orcs.push(characters[i])
  };
};

console.log(orcs);*/

const orcs = characters.filter(function(character) {
  return character.raca === 'Orc';
});

console.log(orcs);

// REDUCE: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final
/*
  O reduce() executa uma função redutora para o elemento do array.
  O reduce() retorna um único valor: o resultado acumulado da função.
  O reduce() não executa a função para elementos de array vazios.
  O reduce() não altera a matriz original.
  SINTAXE -> array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
*/
const nivelTotal = characters.reduce(function(valorAcumulado, personagem) {
  return valorAcumulado + personagem.nivel;
}, 0);

console.log(nivelTotal);

const racas = characters.reduce(function(valorAcumulado, personagem) {
  if(valorAcumulado[personagem.raca]) {
    valorAcumulado[personagem.raca].push(personagem)
  } else {
    valorAcumulado[personagem.raca] = [personagem];
  };

  return valorAcumulado;
}, {});

console.log(racas);