// this -> tells about current context 
const user ={
    username :"archana",
    price: 999,

    welcomMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)
    }


}
user.welcomMessage()
user.username = " aman"
user.welcomMessage()

console.log(this); // {}

function one(){
    let username = "avni"
    console.log(this.username);   
}
one()

const chai = function Two(){
    let username = "avni"
    console.log(this.username);   
}
chai()
//arrow function

const Two = () => {
    let username = "avni"
    console.log(this.username);   
}
Two()

// what is the main difference between function and arrow function
//basic arrow function syntax -> expilicit return 
const addtwo =(num1,num2) => {
    return num1+num2
}
console.log(addTwo(3,4))

// implicit return in arrow function

//const addTwo =(num1,num2) =>  num1+num2
//const addTwo =(num1,num2) => (num1+num2)
//if print object
const addTwo =(num1,num2) =>  ({username : "archana"})

console.log(addTwo(3,4))
// in arrow function ... if we open scope then we have to return the value 
// and if not then u can normally write .. and it works

