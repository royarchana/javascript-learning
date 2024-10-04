let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); //object

//to show specfic date
let myCreatedDate = new Date(2001,10,2)
console.log(myCreatedDate.toDateString());

let myDate1 = new Date(2023,0,23,5,3)
console.log(myDate1.toLocaleString());

let myDate2 = new Date("2023-01-14")
console.log(myDate2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myDate2.getTime());  // use in project

//conversion in second
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getDate()); //gives date ..

newDate.toLocaleString('default',{
    weekday: "long",
})




