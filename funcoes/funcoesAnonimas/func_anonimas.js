//Funções anônimas
function sum(x, y) {
  return x + y;
};

let result = sum;

console.log(result(10, 3));

result = function(a, b) { //função anônima
  return a - b;
};

console.log(result(20, 5));