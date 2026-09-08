let prices = [10000, 25000, 40000];
let newPrices = [];

for (let i = 0; i < prices.length; i++) {
  let price = prices[i] * 2;
  newPrices[i] = price;
};

for (let i = 0; i < newPrices.length; i++) {
  console.log(newPrices[i]);
};