let points = [80, 95, 60, 75, 90];
let total = 0;
let average = 0;

for (let i = 0; i < points.length; i++) {
  total += points[i];
};

average = total / points.length;

console.log(`Total: ${total}`);
console.log(`Average: ${average}`);