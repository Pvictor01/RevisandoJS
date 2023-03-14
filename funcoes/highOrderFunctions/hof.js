//High-Order Functions
function calc(a, b, operation) {
  console.log('Realizando uma operação');
  const result = operation(a, b); 
  return result;
};

function sum(x, y) {
  console.log('Realizando uma soma');
  return x + y;
};

console.log(calc(10, 4, sum));

console.log(calc(10, 5, function(x, y) {
  console.log('Realizando uma subtração');
  return x - y;
}));

function displayElement(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  });
};

const list = ['Pêra', 'Uva', 'Maçã', 'Banana'];

for(let i = 0; i < list.length; i++) { // ForEach faz a mesma coisa
  displayElement(list[i], i, list);
};

list.forEach(displayElement);

list.forEach(function(elemento, indice, array) {
  console.log({
    elemento,
    indice,
    array
  });
});