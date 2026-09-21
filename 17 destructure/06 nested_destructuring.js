// Nested Destructuring - unpacks values from deeply nested objects or multidimensional arrays.

const profile = {
  id: 1,
  details: { city: 'Fergana', zip: 100000 }
};

const { details: { city } } = profile;

console.log(city); // Output: "Fergana"