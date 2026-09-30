// 'this' in constructor functions
// When a function is called with 'new',
// 'this' refers to the newly created object.

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

const myCar = new Car('BMW', 'M5');
console.log(myCar);
