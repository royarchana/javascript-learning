// for each loop->
//The forEach() method is an iterative method. 
//It calls a provided callbackFn function once for each element in an array in ascending-index order. 
//Unlike map(), forEach() always returns undefined and is not chainable.
//forEach() expects a synchronous function — it does not wait for promises.


//Converting a for loop to forEach
const items = ["item1", "item2", "item3"];
const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}

// after
items.forEach((item) => {
  copyItems.push(item);
});
//console.log(copyItems)


const coding=["js","cpp","ruby","python","java"]
// by function
coding.forEach( function (value){
    //console.log(value);
} )
// by arrow function
coding.forEach( (value) =>{
    //console.log(value);
} )

// printMe -> gives the value as it is

function printMe(item){
    console.log(item);
    
}
//coding.forEach(printMe)

coding.forEach( (item,index,arr)=>{
    //console.log(item,index,arr);
    
})
// array ke andar object -> for each
const mycoding =[
    {
    languageName: "javascript",
    languageFileName: "js"
    },
    {
    languageName: "java",
    languageFileName: "java"
    },
    {
    languageName: "python",
    languageFileName: "py"
    },

]

mycoding.forEach( (item) =>{
   // console.log(item);
})

mycoding.forEach( (item) =>{
    //console.log(item.languageName);
})
