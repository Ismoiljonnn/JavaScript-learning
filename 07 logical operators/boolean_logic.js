// Programs make decisions through specific comparisons.
// Boolean logic is a branch of algebra where all values consist of true or false states.
// These values are used to evaluate specific conditions. Boolean logic consists of three
// main operators: AND, OR, and NOT.

// And operator
// Returns true if all values are true; otherwise, it evaluates to false.

console.log(false && false); // false
console.log(false && true);  // false
console.log(true && false);  // false
console.log(true && true);   // true

// Or operator
// Returns true if at least one value is true; otherwise, it evaluates to false.

console.log(false || false); // false
console.log(false || true);  // true
console.log(true || false);  // true
console.log(true || true);   // true

// Not operator
// Returns false if the given value is true, and true if it is false.
// In other words, it inverts the given boolean value.

console.log(!false); // true
console.log(!true);  // false

// Example
let age = 10;
let A = age > 18; // false
let B = age < 20; // true

// AND operator
console.log(A && B); // false

// OR operator
console.log(A || B); // true

// NOT operator
console.log(!A);     // true
console.log(!B);     // false