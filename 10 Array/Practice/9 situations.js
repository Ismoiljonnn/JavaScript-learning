let situations = ["online", "offline", "online", "online", "offline"];
let online = 0;
let offline = 0;

for (let i = 0; i < situations.length; i++) {
  if (situations[i] == "online") {
    online += 1;
  } else {
    offline += 1;
  }
};

console.log(`Online: ${online}`);
console.log(`Offline: ${offline}`);