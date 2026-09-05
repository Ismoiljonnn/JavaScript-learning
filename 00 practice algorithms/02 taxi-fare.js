function calculateTaxiFare(km, isNight) {
  if (km > 0 && isNight) {
    let total = km * 3000 + 10000;
    let nightTotal = total + (total * 0.2);
    return nightTotal;
  } else if (km > 0 && !isNight) {
    return km * 3000 + 10000;
  }
}

let km = 5;
let isNight = true;
let fare = calculateTaxiFare(km, isNight);
let timeText = isNight ? "night" : "day";

console.log(`${km} km (${timeText}): ${fare} UZS`);