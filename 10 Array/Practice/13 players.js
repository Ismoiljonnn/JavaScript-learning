let players = ["Ali", "Bek", "Zilola", "Malika"];
let points = [1200, 3400, 2800, 900];
let total = 0;
let average = 0;
let winnerPoints = 0;
let winnerIndex = 0;

for (let i = 0; i < players.length; i++) {
  console.log(`${i + 1}. ${players[i]} - ${points[i]}`);
  total += points[i];
  if (points[i] > winnerPoints) {
     winnerPoints = points[i];
     winnerIndex = i;
  }
};
average = total / players.length;

console.log(`Total: ${total}`);
console.log(`Average: ${average}`);
console.log(`Winner: ${players[winnerIndex]} (${winnerPoints})`);