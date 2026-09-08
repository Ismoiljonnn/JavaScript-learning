let names = ["Ali", "Zilola", "Bek", "Malika"];
let wanted = ["Bek", "Sardor"];

for (let i = 0; i < wanted.length; i++) {
  let index = names.indexOf(wanted[i]);
  if (index !== -1) {
    console.log(`${wanted[i]} found! Index: ${index}`);
  } else {
    console.log(`${wanted[i]} didn't found`);
  }
};