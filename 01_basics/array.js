//Declaration of Array
const myArr = [0,1,2,3,4,5]
const heros = ["shaktiman","ironman"]

const mmyArr2 = new Array(1,2,3,4)

// const myArr = [0,1,2,3,4,5,true,"avni"] also written like this

//fro accessing 
console.log(myArr[0]);

//Array methods

myArr.push(6)
console.log(myArr);
myArr.pop()

myArr.unshift(9) // adds on begining
myArr.shift()   // removes first element

console.log(myArr.includes(9)); // exist or not (true or false)
console.log(myArr.indexOf(3)); // gives the index of that element

const newArr =myArr.join() //join merge and change the array into string

console.log(myArr);
console.log(newArr);
console.log(typeof newArr); // string

// slice ,splice
console.log("A",myArr);

const myn1 = myArr.slice(1,3) 

console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log("C",myArr);  // array change(splice part is not existed anymore)
console.log(myn2);

const marvel_heros =["thor","Ironman","spiderman"]
const dc_heros =["superman","flash","batman"]

//marvel_heros.push(dc_heros) // not the right way to merge two array
//console.log(marvel_heros);

const allHeros = marvel_heros.concat(dc_heros) // good but not the right way to merge
console.log(allHeros);

//spread method to merge two array 

const all_newHeros =[...marvel_heros, ...dc_heros]
console.log(all_newHeros);

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
//flat method -> removes subarray from the array
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

//if we r doing data scrapping -> data we get is of another type ...to change into array only
console.log(Array.isArray("archana")); // false
console.log(Array.from("archana")); //converts into array
console.log(Array.from({name: "archana"})); //interesting (gives empty array)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));






















