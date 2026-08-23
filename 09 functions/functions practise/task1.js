// Create a function that determines whether a given number is even or odd:

// Function declaration
function evenOrOddDec(number) {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`)
  }
}

// Function expression
const evenOrOddExp = function(number) {
  if (number % 2 === 0) {
    console.log(`${number} id even`);
  } else {
    console.log(`${number} is odd`);
  }
}

// Arrow function
const evenOrOddArrow = (number) => {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
} 