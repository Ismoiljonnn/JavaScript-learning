function sumOfDigits(number) {
  let digit1 = Math.floor(number / 1000);
  let remainder = number % 1000;
  let digit2 = Math.floor(remainder / 100);
  remainder = remainder % 100;
  let digit3 = Math.floor(remainder / 10);
  remainder = remainder % 10;
  let digit4 = remainder;

  let totalSum = digit1 + digit2 + digit3 + digit4;
  return totalSum;
}

let inputNumbers = [4729, 105, 8];
for (let num of inputNumbers) {
  console.log(`${sumOfDigits(num)}`);
}

console.log("--- Numbers 1 to 20 with sum of digits greater than 5");
for (let i = 1; i <= 20; i++) {
  if (sumOfDigits(i) > 5) {
    console.log(`${i}`);
  }
}