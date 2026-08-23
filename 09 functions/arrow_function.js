// Arrow function – a concise syntax for writing function expressions.
// There are several ways to write arrow functions depending on
// parameters and expression length.

// Basic syntax: Similar to a function expression, using the arrow (=>) operator.

const square = (number) => {
  return number * number;
};

square(10); // 100

// Implicit return: If the function body consists of a single statement,
// the return keyword and curly braces can be omitted.

const square2 = number => number * number;

square2(10); // 100

// No parameters: If the function takes no parameters,
// empty parentheses () must be used.

const print = () => console.log("Printing...");
print(); // Printing...

// Multiple parameters: For a function with two or more parameters,
// the parameters must be enclosed within parentheses.

const volume = (a, b, c) => a * b * c;

volume(1, 2, 3); // 6