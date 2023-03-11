function menu() {
  return prompt(
    `Escolha uma das opções para calcular a área:
    \n1- Área do triângulo;
    \n2- Área do retângulo;
    \n3- Área do quadrado;
    \n4- Área do trapézio;
    \n5- Área do circulo;
    \n6- Sair`
  );
};
  
function areaTriangulo() { //forma 1
  let baseTriangulo = parseFloat(prompt('Informe o valor da base do triângulo'));
  let alturaTriangulo = parseFloat(prompt('Informe o valor da altura do triângulo'));
  return baseTriangulo * alturaTriangulo / 2;
};

function areaRetangulo(base, altura) { //forma 2
 return (base * altura);
};

function areaQuadrado(lado) { //forma 3
  let result = lado * lado;
  return result;
};

function areaTrapezio() { 
  let baseMaior = parseFloat(prompt('Informe o valor da base maior do trapézio'));
  let baseMenor = parseFloat(prompt('Informe o valor da base menor do trapézio'));
  let alturaTrapezio = parseFloat(prompt('Informe o valor da altura do trapézio'));
  return (baseMaior + baseMenor) * alturaTrapezio / 2;
};

function areaCirculo() {
  let raioCirculo = parseFloat(prompt('Informe o valor do raio do circulo'));
  return (3.14 * raioCirculo * raioCirculo);
};

function executar() {
  let options = '';

  do {
    options = menu();
    let result
  
    switch(options) {
      case '1':
        result = areaTriangulo();
        break;
      case '2':
        let baseRetangulo = parseFloat(prompt('Informe o valor da base do retângulo'));
        let alturaRetangulo = parseFloat(prompt('Informe o valor da altura do retângulo'));   
        result = areaRetangulo(baseRetangulo, alturaRetangulo);
        break;
      case '3':
        let ladoQuadrado = parseFloat(prompt('Informe o valor do lado do quadrado'));
        result = areaQuadrado(ladoQuadrado);
        break;
      case '4':
        result = areaTrapezio();
        break;
      case '5':
        result = areaCirculo();
        break;  
      case '6':
        alert('Programa encerrado!');
        break;
      default:
        alert('Opção inválida!');
        break;  
    };

    if(result) {
      alert('Resultado: ' + result);
    };
  } while(options !== '6');
};

executar();