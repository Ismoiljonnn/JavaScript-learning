let records = [12, 45, 7, 89, 33, 61];
let biggest = 0;
let smallest = records[0];

for (let i = 0; i < records.length; i++) {
  if (records[i] > biggest) {
    biggest = records[i];
  }
  if (records[i] < smallest) {
    smallest = records[i];
  }
};

console.log(`Biggest: ${biggest}`);
console.log(`Smallest: ${smallest}`);