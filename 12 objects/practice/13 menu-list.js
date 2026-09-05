const menu = { pilaf: 35000, somsa: 8000, soup: 28000, tea: 3000 };

let index = 1;
let totalCount = 0;
let cheapestPrice = Infinity;

for (const item in menu) {
  const price = menu[item];
  console.log($index.  -  sum);
  
  totalCount++;
  if (price < cheapestPrice) {
    cheapestPrice = price;
  }
  index++;
}

console.log("Total dishes: " + totalCount);
console.log("Cheapest price: " + cheapestPrice);
