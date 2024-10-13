// for of -> arrays
// for in -> object



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
const map = new Map()
map.set('IN',"India")
map.set('Cn',"CAnada")
map.set('Fr',"France")

// console.log(map)
// loops in maps
for (const key of map) {
    //console.log(key)
}

for (const [key,value] of map) {
    //console.log(key, ':', value)
}

//loops in object -> another way -> for of loop dont work in object

const myObject ={
    js : 'Javascript',
    cpp : 'c++',
    rb : "ruby"
}
// for in -> loop
for (const key in myObject) {
//    console.log(key);
//    console.log(myObject[key]);
//    console.log(`${key} shortcut is for ${myObject[key]}`);
   
}

const programming = ["js","c++","rb","swift"]

for (const key in programming) {
   console.log(key); // gives key value in for in loop and gives values in for of loop
   console.log(programming[key]);
   
   
}