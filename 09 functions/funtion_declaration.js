// Function declaration – declared using the function keyword
// and has visibility according to its scope. Function declarations
// are hoisted, allowing them to be called before they are defined
// in the code execution flow.

// General syntax

// function functionName(parameter1, parameter2, ..., parameterN) {
//   statement 1;
//   statement 2;
//   statement 3;
//   return output;
// }

// functionName(argument1, argument2, ..., argumentN);

// Example in JavaScript
square(2); // 4 (works due to hoisting)

function square(number) {
  return number * number;
}

square(10); // 100