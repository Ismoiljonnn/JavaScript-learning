// Function expression – created using the function keyword
// and declared by assigning it directly to a variable.
// Unlike function declarations, function expressions are
// not hoisted, meaning they cannot be called before they are defined.

// General syntax

// const functionName = function(parameter1, parameter2, ..., parameterN) {
//   statement 1;
//   statement 2;
//   statement 3;
//   return output;
// };

// functionName(argument1, argument2, ..., argumentN);

// Example in JavaScript
// square(2); // Cannot be called before initialization

const square = function(number) {
  return number * number;
};

square(10); // 100