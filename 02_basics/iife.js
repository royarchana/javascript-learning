//Immediately Invoked Function Expressions ( IIFE) ->
//1.jaise hi function likhe ..turant execution ho jaye
//2. global scope  se pollution nhi chahiye


function one (){
    console.log(`DB CONNECTED`);
    
}
one(); // -> this semicolon is important for the execution of another statement

// by IIFE
(function Two (){ //=> named iife
    console.log(`DB CONNECTED`);
    
}) ();// Error gives of not using semicolon
//()-> first is function definition        
//()-> second is execution

// by arrow function
(() =>{ //=> unamed iife
    console.log(`DB CONNECTED TWO`);
    
}) () ;

((name) =>{ //=> parametarized iife
    console.log(`DB CONNECTED TWO ${name}`);
    
}) ("avni")
