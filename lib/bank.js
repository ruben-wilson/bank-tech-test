class BankApp{
  constructor(time){
    this.balance = 0;
    this.time = time;
  }

  deposit(sum){
    this.balance += sum;
  }

  withdraw(sum){
    this.balance -= sum;
  }

  balance(){
    return this.balance;
  }
}

module.exports = BankApp;