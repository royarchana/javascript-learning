const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//const ans = myNumbers.map( (num)=> num+10 )
// chaining
const ans = myNumbers
            .map( (num) => num*10 )
            .map( (num)=> num+1)
            .filter( (num)=> num>=40 )

console.log(ans);
// by functions
// const myNums =[1,2,3]
// const myTotal = myNums.reduce( function(acc,currval) {
//     console.log(`acc:${acc} and currval:${currval}`);
    
//     return acc+currval
// } ,0)
// by arrow function
const myNums =[1,2,3]
const myTotal = myNums.reduce( (acc,currval) => acc+currval,0)

console.log(myTotal)

const shoppingCart =[
{
    itemname:"js course",
    price: 299
 },
 {
    itemname:"data science",
    price: 499
 },
 {
    itemname:"web dev",
    price: 999
 },
  {
    itemname:"mobile dev course",
    price: 1299
 },
]

const  priceToPay  = shoppingCart.reduce( (acc,item)=> acc + item.price,0 )
console.log(priceToPay);
