// if Statement – makes a decision based on the condition inside parentheses: 
// if the condition is true, the if block executes; otherwise, the code 
// inside the block is skipped.

const number = 2;

if (number > 0) {
  console.log('The given number is positive');
}

console.log('Line after if');

// Execution Flow:
// Condition is true (number = 2): Executes the code inside the if block =>
// => Continues to the line after if.

// Condition is false (number = -2): Skips the code inside the if block =>
// => Jumps directly to the line after if.