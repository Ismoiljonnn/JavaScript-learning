// if/else Statement – An if statement can optionally 
// include an else block: if the condition is true, the 
// if block executes; otherwise, the else block executes.

const number = 2;

if (number > 0) {
  console.log('The given number is positive');
} else {
  console.log('The given number is negative');
}

// Execution Flow:
// Condition is true (number = 2): Executes the if block =>
// => Skips the else block => Continues to the code after if/else.

// Condition is false (number = -2): Skips the if block =>
// => Executes the else block => Continues to the code after if/else.