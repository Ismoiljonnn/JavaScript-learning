const bankAccount = {
  owner: "Ali",
  balance: 50000,

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  },

  withdraw(amount) {
    if (amount > this.balance) {
      return "Mablag' yetarli emas";
    }
    this.balance -= amount;
    return this.balance;
  }
};

module.exports = bankAccount;
