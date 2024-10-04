//strings can be denoted by single qoute or double quote

const name ="archana"
const repoCount = 50

console.log(name+ repoCount +" Value") // dont use this for concatenation
//for concatenation use -> ` `
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//for declaration of string
const gameName = new String('archanaroy')

console.log(gameName[0])  // -> a
console.log(gameName.__proto__) // -> {} (empty object)

console.log(gameName.length); // 10
console.log(gameName.toUpperCase); //ARCHANAROY
console.log(gameName.charAt(2)); // c
console.log(gameName.indexOf('a')); // 0

const newString = gameName.substring(0,4)
console.log(newString);   // arch

const anotherString = gameName.slice(0,4) // allow negative values also
console.log(anotherString);  //arch

const newStringOne = "   archana    "   //to reduce extra space use trim
console.log(newStringOne.trim());   // archana -> prints without space

const url = "https://google.com/archana%20roy"

console.log(url.replace('%20','-')) // https://google.com/archana-roy
console.log(url.includes('roy')); // true
console.log(url.includes('kaam')); // false
//converting string into array

const conArray = new String('archana-placement-love')
console.log(conArray.split('-')) // ['archana','placement','love']





