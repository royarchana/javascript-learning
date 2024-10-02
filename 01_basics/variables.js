const accountId = 14123
let accountEmail ="abc@.com"
var accountPassword ="12121"
accountCity="Jaipur" //dont try to right like this

//  accountId = 12 // we cant change it as it is declered be const

accountEmail = "scf@.com"
accountPassword = "34567"
accountCity = " Kolkata"

let accountDestination;

// dont prefer var because its arises the issue in block scope & functional scope.

console.log(accountId);

//by using table we can write all in one .

console.table([accountId,accountEmail,accountPassword,accountCity,accountDestination])

