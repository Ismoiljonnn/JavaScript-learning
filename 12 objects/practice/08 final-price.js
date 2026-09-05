const calculateFinalPrice = (product) => {
  const total = product.price * product.quantity;
  return total - (total * product.discount) / 100;
};

module.exports = calculateFinalPrice;
