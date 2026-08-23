// In JavaScript, assignment operators are used to assign values to variables,
// often providing a shorthand syntax to combine arithmetic with assignment.

// Assignment operators
// =   Assigns value | Assigns the value of the right operand to the left operand -> variable1 = variable2
// +=  Addition assignment | Adds the right operand to the left operand and assigns the result -> variable1 += variable2
// -=  Subtraction assignment | Subtracts the right operand from the left operand and assigns the result -> variable1 -= variable2
// *=  Multiplication assignment | Multiplies the left operand by the right operand and assigns the result -> variable1 *= variable2
// /=  Division assignment | Divides the left operand by the right operand and assigns the result -> variable1 /= variable2
// %=  Modulus assignment | Calculates the division remainder and assigns the result to the left operand -> variable1 %= variable2

let a = 5, b = 10, c = 15;

console.log(a); // 5
a = b;
console.log(a); // 10
a += b;
console.log(a); // 20
a -= b;
console.log(b); // 10
c *= b;
console.log(c); // 150
c /= 5;
console.log(c); // 30
b %= 2;
console.log(b); // 0