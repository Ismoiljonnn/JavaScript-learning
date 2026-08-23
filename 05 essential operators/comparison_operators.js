// Comparison operators
// In JavaScript, comparison operators are used to compare two operands.
// They return true or false.

// ==   Compares the equality of two operands without considering their type  -> variable1 == variable2
// ===  Compares the equality of two operands by both value and type -> variable1 === variable2
// !=   Checks the inequality (not equal) of two operands -> variable1 != variable2
// >    Greater than | Returns true if the left value is greater than the right; otherwise, returns false -> variable1 > variable2
// <    Less than | Returns true if the left value is less than the right; otherwise, returns false -> variable1 < variable2
// >=   Greater than or equal to | Returns true if the left value is greater than or equal to the right; otherwise, returns false -> variable1 >= variable2
// <=   Less than or equal to | Returns true if the left value is less than or equal to the right; otherwise, returns false -> variable1 <= variable2

let a = 5, b = 10, c = "5";
const z = a;

console.log(a == c);  // true
console.log(a === c); // false
console.log(a == z);  // true
console.log(a === z); // true
console.log(a != b);  // true
console.log(a != z);  // false
console.log(a > b);   // false
console.log(a < b);   // true
console.log(a >= b);  // false
console.log(a <= b);  // true