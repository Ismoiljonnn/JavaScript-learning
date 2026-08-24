// if/else if/else Statement – Used to evaluate multiple conditions sequentially.
// If the first condition is true, its block executes. If false,
// JavaScript evaluates the next else if condition, 
// and falls back to the else block if all conditions evaluate to false.

const number = 2;

if (number > 0) {
  console.log('The given number is positive');
} else if (number === 0) {
  console.log('The given number is 0');
} else {
  console.log('The given number is negative');
}

// Execution Flow:
// 1st Condition is true (number = 2): Executes the if block =>
// => Skips remaining else if and else blocks => Continues to the code after.

// 2nd Condition is true (number = 0): Skips the if block =>
// => Executes the else if block => Skips else block => Continues to the code after.

// All Conditions are false (number = -2): Skips if and else if blocks =>
// Executes the else block => Continues to the code after.