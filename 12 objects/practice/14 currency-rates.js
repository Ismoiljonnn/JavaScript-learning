const exchangeRates = { USD: 12600, EUR: 13700, RUB: 140 };

function convertToSum(amount, currency) {
  if (currency in exchangeRates) {
    return amount * exchangeRates[currency];
  }
  return Currency not found: ;
}

console.log(convertToSum(100, "USD"));
console.log(convertToSum(50, "EUR"));
console.log(convertToSum(1000, "RUB"));
console.log(convertToSum(10, "GBP"));
