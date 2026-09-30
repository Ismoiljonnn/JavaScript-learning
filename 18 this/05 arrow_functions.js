// 'this' in arrow functions
// Arrow functions do NOT have their own 'this'.
// They inherit 'this' from the surrounding (lexical) scope.

const person = {
  name: 'Ismoil',
  regular() {
    console.log('Regular:', this.name); // 'Ismoil'
  },
  arrow: () => {
    console.log('Arrow:', this.name); // undefined (inherits outer scope)
  }
};

person.regular();
person.arrow();