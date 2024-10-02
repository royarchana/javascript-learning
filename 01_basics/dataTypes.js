"use strict"; //treat all JS code as newer version 

//alert(3+3) // this file not run as we are using nodejs,not browser

console.log(3+3); console.log("hello") // this violates readability.

let name ="archana" // string datatype
let age = 18  // number datatype
let isLogin = true// boolean datatype

/* Primitive Datatypes
number => 2 to power 53 
bigint
string => ""
boolean  => true/false
null -> standalone value
undefined ->
symbol -> unique

object 

*/
// typeof -> tells the type of datatype 
console.log(typeof null) //object
console.log(typeof undefined) //undefined

/*
main reasons why data can be categories in two parts  => how data can be stored in memory and how can data should acssess

1.Primitive => 7 Types: String , Number , Boolean ,null, undefined , symbol, BigInt
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId) // gives false

const bigNumber = 123456789n
                        
2.Non-Primitive or Refrence Type => Array ,Objects,Functions
its datatypes is always object

const heros =["shaktiman","ironman"] // Array
{
  name : "archana",
  age 18,
}                       // object

const myFunction = function(){
console.log( "hello")
}

*/
