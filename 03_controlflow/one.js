//
const isUserlogged = true
const temp = 29
if(isUserlogged){
// if condition is true ..the code will execute
}
if(temp < 30){
    console.log("less than 50");
    
}
console.log("temp is greater than 50");

if(temp === 30){
    console.log("less than 50");
    
}else{
    console.log("temp is greater than 50");
}

if(2=="2"){
   console.log("executed");// it will executed
   
}
if(2 ==="2"){
    console.log("executed"); // it will not executed 
    
 }
//  const score = 200
//  if(score > 100){
//     const power = "fly"
//     console.log(`User power : ${power}`)
//  }
 //but
 const score = 200
 if(score > 100){
    const power = "fly"
   
 }
 //console.log(`User power : ${power}`)// this will give error becoz of scooping 
 
//  const balance = 1000
//  if(balance > 500) console.log("test");
const balance = 1000
//if(balance > 500) console.log("test"),console.log("test2");// we can write it also but not acceptable

const isUserloggedIn= true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserloggedIn && debitCard){
    console.log("allow to buy courses");
    
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
    
}



 
 