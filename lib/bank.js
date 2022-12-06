class BankApp {
  constructor (time) {
    this.balance = 0
    this.transactions = []
    this.time = time
    this.table = []
  }

  deposit (sum) {
    this.balance += sum
    const transaction = {
      deposit: `£${sum.toFixed(2)}`,
      withdraw: '   ',
      balance: `£${this.balance.toFixed(2)}`,
      time: this.time.toLocaleDateString()
    }
    this.transactions.push(transaction)
  }

  withdraw (sum) {
    this.balance -= sum
    const transaction = {
      deposit: '   ',
      withdraw: `£${sum.toFixed(2)}`,
      balance: `£${this.balance.toFixed(2)}`,
      time: this.time.toLocaleDateString()
    }
    this.transactions.push(transaction)
  }

  print_all_transactions () {
    return this.transactions
  }
}

module.exports = BankApp
