const calculateCartTotal = (cart) => {
  let total = 0;
  for (const item in cart) {
    total += cart[item].price * cart[item].quantity;
  }
  return total;
};

const countCartItems = (cart) => {
  let count = 0;
  for (const item in cart) {
    count += cart[item].quantity;
  }
  return count;
};

const getMostExpensiveItem = (cart) => {
  let maxTotal = 0;
  let mostExpensiveName = "";
  for (const item in cart) {
    const itemTotal = cart[item].price * cart[item].quantity;
    if (itemTotal > maxTotal) {
      maxTotal = itemTotal;
      mostExpensiveName = item;
    }
  }
  return mostExpensiveName;
};

const addToCart = (cart, name, price, quantity) => {
  cart[name] = { price, quantity };
};

module.exports = {
  calculateCartTotal,
  countCartItems,
  getMostExpensiveItem,
  addToCart
};
