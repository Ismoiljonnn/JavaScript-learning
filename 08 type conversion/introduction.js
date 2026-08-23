// Type conversion – converting a data type stored in JavaScript
// from one representation to another.

// Number
// Number - allows converting a given data type into a number
// using a primitive wrapper object. If the value cannot be converted
// into a valid number, the special value NaN (Not-a-Number) is returned.

const age = '23'; // String
console.log(age); // String
console.log(Number(age)); // Number

console.log(age + 1); // 231 (concatenation)
console.log(Number(age) + 1); // 24

const firstName = 'Ismoiljon';
console.log(Number(firstName)); // NaN

// String
// String – allows converting a given data type into a string
// representation using a primitive wrapper object.

const year = 2021; // Number
console.log(year); // Number
console.log(String(year)); // String