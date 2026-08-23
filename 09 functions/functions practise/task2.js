// Write a function that returns the larger of two given numbers:

// Function declaration
function maxDec(number1, number2) {
  if (number >= number2) {
    return number1;
  }
  return number2;
}

// Function expression
const maxExp = function(number1, number2) {
  if (number1 >= number2) {
    return number1;
  }
  return number2;
}

// Arrow function
const maxArrow = (number1, number2) => {
  if (number1 >= number2) {
    return number1;
  }
  return number2;
}