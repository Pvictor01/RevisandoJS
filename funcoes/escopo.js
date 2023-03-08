// Escopo é o contexto onde a variável foi declarada podendo ser mais externo, ou mais interno (se estiver dentro de um bloco)
let car = 'toyota';

function newCar() {
  car = 'peugeot';
};

//console.log(car);
newCar();
//console.log(car);

// Variáveis no escopo mais interno não podem ser usadas fora dele em escopos mais internos
function criarAnimal() {
  let animal = "Gato";
};

criarAnimal();
console.log(animal); // Gera erro