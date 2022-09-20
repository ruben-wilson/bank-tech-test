class BankApp{
  constructor(time){
    this.balance = 0;
    this.transactions = [];
    this.time = time;
  }

  deposit(sum){
    this.balance += sum;
    const transaction = {
      deposit: sum,
      withdraw: null,
      balance: this.balance,
      time:  this.time.toDateString()
    }
    this.transactions.push(transaction)
  }

  withdraw(sum){
    this.balance -= sum;
  }

  balance(){
    console.log("hello")
  }

}

module.exports = BankApp;