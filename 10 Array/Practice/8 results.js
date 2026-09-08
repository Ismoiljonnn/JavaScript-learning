let results = [45, 88, 72, 30, 95, 60];
let total = 0;

for (let i = 0; i < results.length; i++) {
  if (results[i] >= 60) {
    console.log(results[i]);
    total += 1;
  }
};

console.log(`Passed: ${total}`);