// 'this' in ES6 Classes
// Inside class methods, 'this' refers to the instance of the class.

class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

const p1 = new Person('Ismoil');
p1.sayName();
