//object declaration :
//singleton -> ek object  banta h by using constructor
Object.create
// symbol declaration
const mySym = Symbol("key1")
//object literals ->  
const JsUser ={
    name : "Archana",
    "full name": "Archana Roy",
    [mySym] :"myKey1",
    age : 20,
    location : "Kolkata",
    email : "avni@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}
//for accessing values in object ....2 ways
console.log(JsUser.email);
console.log(JsUser["email"]);

//console.log(JsUser.full name);// dont gives ans
console.log(JsUser["full name"]);


// symbol ko as a key kaise use kr skte h ??
//symbol  ko object k keys me add karo aur print kr k show kro// interview
console.log(JsUser[mySym]);
console.log( typeof JsUser[mySym]);

//change the values of object
JsUser.email = "abs@google.com"

//Object.freeze(JsUser)//cant change the value of object

console.log(JsUser);

//function 
JsUser.greeting = function () {
    console.log("Hello JS user");   
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user,${this.name}`);// ``-> backticks , string interpolation 
}
console.log(JsUser.greeting); //Function
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



//singleton object
const tinderUser = new Object()

tinderUser.id = "1234"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = true

console.log(tinderUser)

const regularUser = {
    email :"abs@gmail.com",
    fullname :{
        userfullname: {
            firstname: " archana",
            lastname : "roy"
        }
    }
}

console.log(regularUser.fullname.userfullname.lastname)


const obj1= {1: "a", 2:"b"}
const obj2= {3: "a", 4:"b"}

//const obj3= {obj1,obj2} // problamatic
//const obj3 = Object.assign({},obj1,obj2) // merging two object
const obj3 ={...obj1,...obj2} // most used(spread method for merging)
console.log(obj3);


// when the values comes from database  -> array of objects aata h 
const users = [
    {
        id: "1",
        email:"a@gmail.com"
    }
]
//users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course ={
    cousreName:"Js",
    price: "999",
    cousreInstructor:"hitesh"
}

//console.log(course.cousreInstructor);

const {cousreInstructor : instructor} = course
console.log(instructor);

//json

{
    "name":"archana",
    "coursename":"js in hindi",
    "price" : "free"
}

// when API call from json -> convert in into object and fetch the value

















