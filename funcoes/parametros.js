function dobro(x) {
  alert('O dobro de ' + x + ' é ' + (x * 2));
};

//dobro(4);

function sayName(name = 'Paulo') {
  alert('Olá, ' + name);
};

//sayName();

function sum(a, b) {
  alert('O resultado da soma é: ' + (a + b));
};

//sum(10, 30);

function crearUser(name, email, password, type = 'admin') { //parâmetro padrão precisa ficar por último
  const user = {
    name,     //name : name
    email,    
    password,
    type
  };

  console.log(user);
};

//crearUser('Paulo', 'paulovictordev01@gmail.com', '1234');

function parameterWithObject(user) {
  user.name;
  user.cpf;
  user.email;
  user.age;
};

const data = {
  name: '',
  cpf: '',
  email: '',
  age: ''
};

parameterWithObject(data);