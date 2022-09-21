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
//  |Date|Credit|Debit|Balance|
//  |21/09/2022|£1000.00|   |£1000.00|
//  |21/09/2022|   |£150|£1000.00|
  
```