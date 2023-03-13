function division(num) {
  console.log(num);
  if(num % 2 === 0) {
    division(num / 2)
  } else {
    return num
  };
};

//division(256);

function double(num) {
  console.log(num);
  double(num / 2);
};

//dobrar(1) //multiplica até dar erro

function factorial(num) {
  console.log('Número: ' + num);
  if(num === 0) { // caso base
    return 1;
  } else if( num === 1) {
    return 1;
  } else {
    console.log(num + ' * !' + (num - 1));
    return num * factorial(num - 1);
  };
};

console.log(factorial(5));