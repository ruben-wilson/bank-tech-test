class StatementFormatter {
  constructor(bankApp) {
    this.bank = bankApp
    this.table = []
  }

  create_statement() {
    const transactions = this.bank.print_all_transactions()
    this.table = ['|Date|Credit|Debit|Balance|\n']
    for (const transaction of transactions) {
      this.table.push(`|${transaction.time}|${transaction.deposit}|${transaction.withdraw}|${transaction.balance}|\n`)
    }
  }

  print_statement() {
    this.create_statement()
    return this.table.join('')
  }
}

module.exports = StatementFormatter