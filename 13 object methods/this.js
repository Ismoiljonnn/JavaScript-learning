// The this Keyword – Used inside an object 
// method to access properties of that same object.

const programmer = {
  name: 'Ismoiljon',
  age: 16,
  greet: function() {
    console.log('Hello! My name is ' + this.name);
  }
};

programmer.greet(); // Output: "Hello! My name is Ismoiljon"