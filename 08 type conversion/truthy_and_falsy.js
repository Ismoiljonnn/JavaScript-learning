// In JavaScript, when a given value is converted to a Boolean
// representation, it evaluates to either Truthy or Falsy. Truthy
// refers to data values that evaluate to true, while Falsy
// refers to those that evaluate to false.

// Falsy values
// false
// 0
// "" (empty string)
// undefined
// null
// NaN
// 0n (BigInt zero)

// Falsy values
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(0n));

// Truthy values
console.log(Boolean("Ismoiljon"));
console.log(Boolean(23));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean("0"));
console.log(Boolean("false"));

// Example
const firstName = '';

if (firstName) {
  console.log('Your name is: ' + name);
} else {
  console.log('Please enter a name');
}