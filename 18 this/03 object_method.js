// 'this' inside an object method
// When a function is called as a method of an object,
// 'this' refers to the object that owns the method.

const user = {
  name: 'Ismoil',
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

user.greet(); // 'this' points to 'user' object
