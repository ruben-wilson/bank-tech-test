const BankApp = require(".././lib/bank").BankApp;
const StatementFormatter = require(".././lib/bank").StatementFormatter

describe("bankApp", () => {
     it("it stores a number and returns it",()=>{
       const time = {toLocaleDateString: () => "Tue Sep 20 2022"} 
        const app = new BankApp(time) 
        app.deposit(1000)
        expect(app.print_all_transactions()).toEqual([{"balance": "£1000.00", "deposit": "£1000.00", "time": "Tue Sep 20 2022", "withdraw": "   "}])
    })
    it("it stores a number and adds to it then returns it",()=>{
       const time = {toLocaleDateString: () => "Tue Sep 20 2022"} 
        const app = new BankApp(time)
        app.deposit(1000)
        app.deposit(2000)
        expect(app.print_all_transactions()).toEqual([{"balance": "£1000.00", "deposit": "£1000.00", "time": "Tue Sep 20 2022", "withdraw": "   "}, {"balance": "£3000.00", "deposit": "£2000.00", "time": "Tue Sep 20 2022", "withdraw": "   "}])
    })
    it("it stores a number and minuses it then returns it",()=>{
       const time = {toLocaleDateString: () => "Tue Sep 20 2022"} 
        const app = new BankApp(time)
        app.deposit(1000)
        app.withdraw(500)
        expect(app.print_all_transactions()).toEqual([{"balance": "£1000.00", "deposit": "£1000.00", "time": "Tue Sep 20 2022", "withdraw": "   "}, {"balance": "£500.00", "deposit": "   ", "time": "Tue Sep 20 2022", "withdraw": "£500.00"}])
    })
    it("it stores a number and minuses then adds to it then returns it",()=>{
       const time = {toLocaleDateString: () => "Tue Sep 20 2022"} 
        const app = new BankApp(time)
        app.deposit(1000)
        app.withdraw(500)
        app.deposit(2000)
        expect(app.print_all_transactions()).toEqual([{"balance": "£1000.00", "deposit": "£1000.00", "time": "Tue Sep 20 2022", "withdraw": "   "}, {"balance": "£500.00", "deposit": "   ", "time": "Tue Sep 20 2022", "withdraw": "£500.00"}, {"balance": "£2500.00", "deposit": "£2000.00", "time": "Tue Sep 20 2022", "withdraw": "   "}])
    })
    it("it stores a integer and a time",()=>{
       const time = {toLocaleDateString: () => "Tue Sep 20 2022"} 
        const app = new BankApp(time)
        app.deposit(1000)
        expect(app.print_all_transactions()).toEqual([{deposit: "£1000.00", withdraw: "   ", balance: "£1000.00", time: "Tue Sep 20 2022"}])
    })
    it("it returns a integer and a time in the correct format",()=>{
        const test_date = new Date
        let date = new Date
        const app = new BankApp(date)
        app.deposit(1000)
        const formatter = new StatementFormatter(app)
        expect(formatter.print_statement()).toEqual(`|Date|Credit|Debit|Balance|\n|${test_date.toLocaleDateString()}|£1000.00|   |£1000.00|\n`)
  })
})
