// dates
// date is a object
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let myOwnDate = new Date(2023,0,23)    //month start from 0 in js
let myOwnDate = new Date("2023-01-14")
// console.log(myOwnDate);
// console.log(myOwnDate.toLocaleDateString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myOwnDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);  //have too many methods

newDate.toLocaleString('default', {
    weekday: "long",
})
