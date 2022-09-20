class BankApp{

  constructor(time){
    this.balance = 0;
    this.transactions = [];
    this.time = time;
    this.table = [];
  }

  deposit(sum){
    this.balance += sum;
    const transaction = {
      deposit: sum,
      withdraw: null,
      balance: this.balance,
      time:  this.time.toDateString()
    };
    this.transactions.push(transaction);
  }

  withdraw(sum){
    this.balance -= sum;
    const transaction = {
      deposit: null,
      withdraw: sum,
      balance: this.balance,
      time:  this.time.toDateString()
    };
    this.transactions.push(transaction);
  }

  admin(){
    return this.transactions;
  }

  statement(){
    this.table = ["|Deposited|Withdrawn|statement|Date|\n"];
    for(const transaction of this.transactions){
      this.table.push(`|${transaction.deposit}|${transaction.withdraw}|£${transaction.balance}|${transaction.time}|\n`)
    }
  }

  print(){
  this.statement();
   return this.table.join("")

  }

}

// class statementFormatter{
//   constructor(bankApp){
//     this.bank = bankApp;
//     this.transaction = this.bank.statement()
//     this.table = []
//   }

//   statement(){
//     this.table = ["|Deposited|Withdrawn|statement|Date|\n"];
//     for(const transaction of this.transaction){
//       this.table.push(`|${transaction.deposit}|${transaction.withdraw}|£${transaction.balance}|${transaction.time}|\n`)
//     }
//   }

//  print(){
//   this.statement();
//    console.log(this.table.join(""))
//    return this.table.join("")

//   }
// }

module.exports = BankApp;