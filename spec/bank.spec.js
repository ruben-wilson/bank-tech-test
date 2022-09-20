const BankApp = require(".././lib/bank");
// You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
// Deposits, withdrawal.
// Account statement (date, amount, balance) printing.
// Data can be kept in memory (it doesn't need to be stored to a database or anything).


describe("bankApp", () => {
     it("it stores a number and returns it",()=>{
        const app = new BankApp
        app.deposit(1000)
        expect(app.balance).toEqual(1000)
    })
    it("it stores a number and adds to it then returns it",()=>{
        const app = new BankApp
        app.deposit(1000)
        app.deposit(2000)
        expect(app.balance).toEqual(3000)
    })
    it("it stores a number and minuses it then returns it",()=>{
        const app = new BankApp
        app.deposit(1000)
        app.withdraw(500)
        expect(app.balance).toEqual(500)
    })
    it("it stores a number and minuses then adds to it then returns it",()=>{
        const app = new BankApp
        app.deposit(1000)
        app.withdraw(500)
        app.deposit(2000)
        expect(app.balance).toEqual(2500)
    })
    fit("it stores a integer and a time",()=>{
        const time = {toDateString: () => "Tue Sep 20 2022"}
        const app = new BankApp(time)
        app.deposit(1000)
        expect(app.balance).toEqual([{deposit: 1000, withdraw: null, balance: 1000, time: "Tue Sep 20 2022"}])
    })
    xit("it returns a integer and a time in the correct format",()=>{
        const time = {toDateString: () => "Tue Sep 20 2022"}
        const app = new BankApp(time)
        app.deposit(1000)
        expect(app.balance).toEqual("|Deposited|Withdrawn|Balance|Date\n|1000|   |£100|Tue Sep 20 2022\n")
    })
});