// switch Statement – used for decision-making in JavaScript.
// It evaluates an expression and executes the code block that
// matches the expression's value.

const number = 2;
let output;

switch (number) {
  case 1:
    output = 'one';
    break;
  case 2:
    output = 'two';
    break;
  default:
    output = 'not found';
    break;
}

console.log(`Value: ${output}`); // Output: "Value: two"

// switch Statement Flowchart – Visual representation of how
// JavaScript sequentially checks an expression against matching
// case blocks until a match is found or the default fallback is reached.

switch (expression) {
  case 1:
    // code block 1
    break;
  case 2:
    // code block 2
    break;
  case 3:
    // code block 3
    break;
  default:
    // default code
    break;
}

// Matches Case 1?
// Yes: Executes code block 1 => Exits switch.
// No: Checks Case 2.

// Matches Case 2?
// Yes: Executes code block 2 => Exits switch.
// No: Checks Case 3.

// Matches Case 3?
// Yes: Executes code block 3 => Exits switch.
// No: Executes default code => Exits switch.

// break and default Keywords in switch
// break Keyword (Optional): Stops execution inside the switch block and exits.
// Without break, execution continues into subsequent case blocks automatically (known as fallthrough).

// default Keyword (Optional): Serves as a fallback block that executes
// if none of the specified case conditions match the expression (similar to else).

const day = 6;
let dayType;
  
switch (day) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    dayType = 'Weekday';
    break; // Stops execution and exits switch
  case 6:
  case 7:
    dayType = 'Weekend';
    break;
  default:
    dayType = 'Invalid day'; // Executes if day is not 1-7
    break;
}

console.log(dayType); // Output: "Weekend"