/*//GLOBAL SCOPE
let a =300
if(true){
    // BLOCK SCOPE
    let a = 10
    const b = 20
    var c= 30
    console.log(a)
}
//console.log(a)
//console.log(b)
//console.log(c) // 30 becoz var doesnt follow scope concept

// global scope is different in windows and in node js code

function one(){
    const username = "archana"
    function two(){
        const website ="youtube"
        console.log(username)
    }
    //console.log(website) // not accessable

    two() //archana
}

one()
// ek alag scope banta h ...jitni baar function call hota h 
//closure bhi kehte h -> andar ka function bahar k varaible ko acess kr pata h 

if(true){
    const username = "archana"
    if(username === "archana"){
        const website =" youtube"
        console.log(username+website);//archana youtube
        
    }
    console.log(website); // no
    console.log(username); // archana
    
}
console.log(username); //no
*/
//********************************interesting***************** */

function addone(num){
    return num+1
}
addone(5)

const addTwo = function(num){
    return num+2
}

addTwo(5)
