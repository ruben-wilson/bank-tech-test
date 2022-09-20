# Set up

## run + setup tests
```linux
npm i jest
jest
```
## run program
```linux
node ./lib/bank
```
## expected usage
```javascript
node 
const app = require("./lib/bank")
const bankAccount = new app(new Date)

bankAccount.deposit(1000)
//=> null;
bankAccount.withdraw(150)
//=> null;
bankAccount.print()
//=> 
//  |Deposited|Withdrawn|statement|Date|
//  |1000|null|£1000|Tue Sep 20 2022|
//  |null|150|£850|Tue Sep 20 2022|
```