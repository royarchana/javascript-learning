// for each loop->
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
    //console.log(item);
    
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
    console.log(item);
})

mycoding.forEach( (item) =>{
    console.log(item.languageName);
})
