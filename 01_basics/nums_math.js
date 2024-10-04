const score = 400

const balance = new Number(100) // good way for intializing
console.log(balance)

console.log(balance.toString()) // converts num to string
console.log(balance.toString().length) //3
console.log(balance.toFixed(2)) // 100.00

const otherNumber = 233.6789
console.log(otherNumber.toPrecision(3)); // 124

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // 1,000,000
console.log(hundreds.toLocaleString('en-IN')); //10,00,000
//****************************** MATH *******************************//

console.log(Math);  //object
console.log(Math.abs(-4)); // converts -ve to +ve -> 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.min(4,5,8,2,9)); // 2
console.log(Math.max(4,5,8,2,9)); // 9

console.log(Math.random()); // 0-1 ke bich me values aati h  
console.log((Math.random()*10) + 1); // to avoid 0
console.log(Math.floor(Math.random()*10) + 1);  // lowest value 

const min= 10
const max=20

console.log(Math.floor(Math.random() * (max-min+1)) + min);  
//check on mdn for further understanding









