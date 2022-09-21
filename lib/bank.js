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
      deposit: `£${sum.toFixed(2)}`,
      withdraw: "   ",
      balance: `£${this.balance.toFixed(2)}`, 
      time:  this.time.toLocaleDateString()
    };
    this.transactions.push(transaction);
  }

  withdraw(sum){
    this.balance -= sum;
    const transaction = {
      deposit: "   ",
      withdraw:`£${sum.toFixed(2)}`,
      balance: `£${this.balance.toFixed(2)}`,
      time:  this.time.toLocaleDateString()
    };
    this.transactions.push(transaction);
  }

  print_all_transactions(){
    return this.transactions;
  }

}

class StatementFormatter{
  constructor(bankApp){
    this.bank = bankApp;
    this.table = []
  }

  create_statement(){
    let transactions = this.bank.print_all_transactions()
    this.table = ["|Date|Credit|Debit|Balance|\n"];
    for(const transaction of transactions){
      this.table.push(`|${transaction.time}|${transaction.deposit}|${transaction.withdraw}|${transaction.balance}|\n`)
    }
  }

 print_statement(){
  this.create_statement();
   return this.table.join("")

  }
}

module.exports = {BankApp, StatementFormatter};