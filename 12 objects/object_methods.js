// Object Methods – Objects can store functions as properties,
// which are called methods.

const programmer = {
  name: 'Ismoiljon',
  age: 16,
  greet: function() {
    console.log('Hello!');
  }
};

programmer.greet(); // Output: "Hello!"