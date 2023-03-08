function calcularMedia(a, b) {
  const media = (a + b) / 2;
  return media;
};

//console.log(calcularMedia(10, 40)); 

function criarProduto(nome, preco) {
  const produto = {
    nome, // nome: nome
    preco
  };

  return produto;
};

//console.log(criarProduto('intel i9 16gb', 4000)); 

function areaRetangulo(x, y) {
  return x * y;
};

//console.log(areaRetangulo(9, 4));

function areaQuadrada(lado) {
  return areaRetangulo(lado, lado);
};

//console.log(areaQuadrada(9));

function maioridade(idade) {
  if(idade >= 18) {
    return 'Maior de idade'
  } else {
    return 'Menor de idade'
  };
};

console.log(maioridade(38));
console.log(maioridade(16));
