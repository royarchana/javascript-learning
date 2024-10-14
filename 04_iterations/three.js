// for of -> arrays,strings
// for in -> object,arrays



//["","",""]
//[{},{},{}]

const arr =[1,2,3,4,5]
 
for (const num of arr) {
    //console.log(num);    
}

const greetings ="Hello world"

for (const greets of greetings) {
    //console.log(greets);
    
}
//MAps
const map = new Map() // for creating maps
map.set('IN',"India") // set refers to settings the keys and their values 
map.set('Cn',"CAnada")
map.set('Fr',"France")

//  console.log(map)
//  console.log(typeof map) //  ek object
// loops in maps
for (const key of map) {
//    console.log(key)
//    console.log( typeof key) // alag alag object 
}

for (const [key,value] of map) {
    // console.log(key, ':', value)
    // console.log( typeof key, ':', value) // string
}

//loops in object -> another way -> for of loop dont work in object

const myObject ={
    js : 'Javascript',
    cpp : 'c++',
    rb : "ruby"
}
// for in -> loop
for (const key in myObject) {
    //console.log(key); // returns only key 
    //console.log(myObject[key]); // returns  only value
   //console.log(`${key} shortcut is for ${myObject[key]}`);
   
}

const programming = ["js","c++","rb","swift"]

for (const key in programming) {
    //console.log(key); // gives key ->  in(for in) loop  and gives values -> in (for of )loop
    console.log(programming[key]);
   
   
}

//difference in (for of) and (for in)

const arr1 = [3, 5, 7];
arr.foo = "hello";

for (const i in arr1) {
  console.log(i);
}
// "0" "1" "2" "foo"

for (const i of arr1) {
  console.log(i);
}
// Logs: 3 5 7

// interesting thing -> The for...of and for...in statements can also be used with destructuring.
//For example, you can simultaneously loop over the keys and values of an object using Object.entries().
const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
// "foo" 1
// "bar" 2