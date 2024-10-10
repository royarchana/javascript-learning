
function first(){
    console.log("H")
}

//first()  // H

// function addTwoNumbers(num1,num2){ //parameters
//     console.log(num1+num2);
    
// }
function addTwoNumbers(num1,num2){ //parameters
    // let result = num1+num2
    // return result
    return num1+num2
    
}
// addTwoNumbers(3,5) //arguments    // 8
// addTwoNumbers(3,"a")   // 3a
// addTwoNumbers(3,"4")   // 34
// addTwoNumbers(3, null) // 3

const result = addTwoNumbers(3,5) // 8
// console.log("Result:", result);   // undefined

function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return   
    // } 
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("archana"));
// console.log(loginUserMessage()); // jab kuch bhi pass nhi krte h to undefined aata h 


function calculateCartPrice(...num1){ // ... -> rest opertor
    // function calculateCartPrice(val1,val2,...num1){ //output -> 500,600 becoz first two value are store in first varaible   
    return num1
}
//console.log(calculateCartPrice(200,400,500,600)); // output-> all elements

const user ={
    name: "avni",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
    
}

handleObject(user)  // call the function 
//or call the object in function 
handleObject({
    name : "avni",
    price : 399
})

const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));









