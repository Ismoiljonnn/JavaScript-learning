// We can implement Boolean logic in JavaScript using logical operators.
// JavaScript supports all the core operators: AND, OR, and NOT.

// Logical AND  =>  &&  =>  Returns true if both operands are true;
// otherwise, returns false
// Example
true && false; // false

// Logical OR  =>  ||  =>  Returns true if at least one of the two operands is true;
// otherwise, if all are false, it evaluates to false.
// Example
true || false; // true

// Logical NOT  =>  !  => Inverts the boolean value: returns true if the operand
// is false, and false if true
// Example
!true; // false

// Logical operators in JavaScript

// Logical AND (&&) - returns true if both operands are true
console.log(true && false); // false

// Logical OR (||) - returns true if at least one operand is true
console.log(true || false); // true

// Logical NOT (!) - inverts the boolean state
console.log(!true); // false

// Exercise for practise
// To start the Bootstrap course, the user is required to have
// completed both the HTML and CSS courses. Write a program that
// notifies the user they can start Bootstrap if they have completed
// both HTML and CSS courses. If they have completed only one of the courses,
// notify them to complete the other one. If neither course has been
// started yet, inform them to start learning them.

function checkBootstrapEligibility(hasHTML, hasCSS) {
  if (hasHTML && hasCSS) {
    console.log("You have completed HTML and CSS. You can start the Bootstrap course!");
  } else if (hasHTML && !hasCSS) {
    console.log("You have completed HTML. You need to finish the CSS course to start Bootstrap.");
  } else if (!hasHTML && hasCSS) {
    console.log("You have completed CSS. You need to finish the HTML course to start Bootstrap.");
  } else {
    console.log("Please start learning HTML and CSS before beginning Bootstrap!");
  }
}

// Testing the function:
checkBootstrapEligibility(true, true);   // Eligible for Bootstrap
checkBootstrapEligibility(true, false);  // Requires CSS
checkBootstrapEligibility(false, true);  // Requires HTML
checkBootstrapEligibility(false, false); // Neither started

