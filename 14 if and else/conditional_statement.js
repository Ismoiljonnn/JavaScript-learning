// Conditional Statement – an instruction in JavaScript used to execute
// a specific block of code based on whether a given condition evaluates to true or false.

// Example Logic:
// If the user is logged in:
//   Redirect to the personal dashboard
// else:
//   Redirect to the registration page

// Two Main Conditional Statements in JavaScript:
// 1. if Statement (3 structures):
//   if
//   if...else
//   if...else if...else
// 2. switch Statement

// Code example:
const user = 'Ismoiljon';
const isLoggedIn = true;

if (isLoggedIn) {
  console.log(`Redirecting ${user} to personal dashboard...`);
} else {
  console.log('Redirecting to registration page...');
}