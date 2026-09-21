// Rest Property in Destructuring - collects remaining unpacked elements or properties into a single array or object.

const values = [1, 2, 3, 4, 5];
const [head, ...tail] = values;

const car = { brand: 'Audi', model: 'R8', color: 'black' };
const { brand, ...restProps } = car;

console.log(tail); // Output: [2, 3, 4, 5]
console.log(restProps); // Output: { model: 'R8', color: 'black' }