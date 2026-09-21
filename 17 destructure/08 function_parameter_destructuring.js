// Function Parameter Destructuring - directly extracts properties from arguments inside function signatures.

function displayUser({ name, age }) {
  console.log(`User ${name} is ${age} years old.`);
}

const config = { name: 'Jarvis', age: 2 };
displayUser(config);