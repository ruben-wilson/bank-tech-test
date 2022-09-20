const BankApp = require(".././lib/bank");
// const Formatter = require(".././lib/bank").transactionsFormatter;
// You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
// Deposits, withdrawal.
// Account admin (date, amount, statement) printing.
// Data can be kept in memory (it doesn't need to be stored to a database or anything).


describe("bankApp", () => {
     it("it stores a number and returns it",()=>{
        const app = new BankApp(new Date)
        app.deposit(1000)
        expect(app.admin()).toEqual([{"balance": 1000, "deposit": 1000, "time": "Tue Sep 20 2022", "withdraw": null}])
    })
    it("it stores a number and adds to it then returns it",()=>{
        const app = new BankApp(new Date)
        app.deposit(1000)
        app.deposit(2000)
        expect(app.admin()).toEqual([{"balance": 1000, "deposit": 1000, "time": "Tue Sep 20 2022", "withdraw": null}, {"balance": 3000, "deposit": 2000, "time": "Tue Sep 20 2022", "withdraw": null}])
    })
    it("it stores a number and minuses it then returns it",()=>{
        const app = new BankApp(new Date)
        app.deposit(1000)
        app.withdraw(500)
        expect(app.admin()).toEqual([{"balance": 1000, "deposit": 1000, "time": "Tue Sep 20 2022", "withdraw": null}, {"balance": 500, "deposit": null, "time": "Tue Sep 20 2022", "withdraw": 500}])
    })
    it("it stores a number and minuses then adds to it then returns it",()=>{
        const app = new BankApp(new Date)
        app.deposit(1000)
        app.withdraw(500)
        app.deposit(2000)
        expect(app.admin()).toEqual([{"balance": 1000, "deposit": 1000, "time": "Tue Sep 20 2022", "withdraw": null}, {"balance": 500, "deposit": null, "time": "Tue Sep 20 2022", "withdraw": 500}, {"balance": 2500, "deposit": 2000, "time": "Tue Sep 20 2022", "withdraw": null}])
    })
    it("it stores a integer and a time",()=>{
        const time = {toDateString: () => "Tue Sep 20 2022"}
        const app = new BankApp(time)
        app.deposit(1000)
        expect(app.admin()).toEqual([{deposit: 1000, withdraw: null, balance: 1000, time: "Tue Sep 20 2022"}])
    })
    it("it returns a integer and a time in the correct format",()=>{
        const time = {toDateString: () => "Tue Sep 20 2022"}
        const app = new BankApp(time)
        app.deposit(1000)
        expect(app.print()).toEqual("|Deposited|Withdrawn|statement|Date|\n|1000|null|£1000|Tue Sep 20 2022|\n")
  })
})
