
function first(){
    console.log("H")
}

first()  // H

function addTwoNumbers(num1,num2){ //parameters
    console.log(num1+num2);
    
}
addTwoNumbers(3,5) //arguments    // 8
addTwoNumbers(3,"a")   // 3a
addTwoNumbers(3,"4")   // 34
addTwoNumbers(3, null) // 3

const result = addTwoNumbers(3,5) // 8
console.log("Result:", result);   // undefined
