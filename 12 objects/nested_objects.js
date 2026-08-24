// Nested Objects – An object can store another object
// inside it as a property value.

const programmer = {
  name: 'Ismoiljon',
  age: 16,
  address: {
    country: 'Uzbekistan',
    city: 'Fergana',
    house: 62
  }
};

console.log(programmer.address); 
// Output: { country: 'Uzbekistan', city: 'Fergana', house: 62 }

console.log(programmer.address.city); 
// Output: "Fergana"