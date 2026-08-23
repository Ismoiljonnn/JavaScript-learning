// Write a function that reverses a given number:

// Fuction declaration
function reverseDec(number) {
  const numberStr = String(number);
  const reversedStr = numberStr.split("").reverse().join("");
  return Number(reversedStr);
}

// Function expression
const reverseExp = function(number) {
  const numberStr = String(number);
  const reversedStr = numberStr.split("").reverse().join("");
  return Number(reversedStr);
}

// Arrow function
const reverseArrow = (number) => {
  const numberStr = String(number);
  const reversedStr = numberStr.split("").reverse().join("");
  return Number(reversedStr);
}