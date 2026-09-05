function isLongEnough(password) {
  return password.length >= 8;
}

function checkPasswordStrength(password) {
  if (isLongEnough(password)) {
    return "strong";
  } else if (password.length >= 5) {
    return "medium";
  } else {
    return "weak";
  }
}

let input = "Ismoiljon";

console.log(`${input} -> ${checkPasswordStrength(input)}`);