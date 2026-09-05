const calculator = {
  value: 0,

  add(n) {
    this.value += n;
    return this;
  },

  subtract(n) {
    this.value -= n;
    return this;
  },

  multiply(n) {
    this.value *= n;
    return this;
  },

  clear() {
    this.value = 0;
    return this;
  },

  getResult() {
    return this.value;
  }
};

console.log(calculator.add(10).multiply(3).subtract(5).getResult()); // 25
console.log(calculator.clear().add(10).getResult()); // 10
console.log(calculator.multiply(2).getResult()); // 20
