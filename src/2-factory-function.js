//q5: create a factory func with 3 methods forming a closure over initial balance
const bankAccountFactory = (initialBalance = 0) => {
  return {
    checkBalance() {
      return initialBalance;
    },
    add(amount) {
      initialBalance += amount;
      console.log(`$${amount} added.`);
    },
    subtract(amount) {
      initialBalance -= amount;
      console.log(`$${amount} subtracted.`);
    }
  }
};

module.exports = {
  bankAccountFactory,
};
