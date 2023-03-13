//Métodos são funções atreladas a objetos

let person = {
  name: 'Paulo',
  age: '22',
  sayHello() {
    console.log('Hello, my name is ' + this.name);
  }
};

console.log(person);
person.sayHello();