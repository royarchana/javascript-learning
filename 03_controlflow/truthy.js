
// truthy values -> we assume the value to be true

//const userEmail = "av@gmail.com"//true
//const userEmail = ""//false
const userEmail = [] // true

if(userEmail){
    console.log("got user email");
    
}else{
    console.log("dont have user email");
}
// falsy values
// false,0,-0 ,BigInt 0n ,"",null,undefined,NaN

// truthy values-> string ke andar kuch bhi h ...true h 
// "0", 'false'," ",[],{},function(){}

if(userEmail.length === 0){
    console.log("Array is empty");   
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty"); 
}

//comparison
// false == 0    // true
// false == ''   // true
// 0 == ''       // true

// Nullish Coalescing Operator ( ??): null undefined

let val1;
//val1 = 5 ?? 10 // 5
//val1 = null ?? 10 // 10
 //val1 = undefined ?? 15 // 15
 val1 = null ?? 10 ?? 15 // 10

console.log(val1);

// Terniary Operator
// condition ? true :false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more tahn 80");


