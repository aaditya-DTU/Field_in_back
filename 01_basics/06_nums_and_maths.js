const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));    //toFixed m precision value write krte h

const otherNum = 123.9885

// console.log(otherNum.toPrecision(3));  //return a string

const hundreds = 100000000
// console.log(hundreds.toLocaleString());

// -----------********-------------------------------
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(2.3));
// console.log(Math.floor(2.9));
// console.log(Math.sqrt(256));

console.log(Math.random());   //always lies b\w 0 and 1
console.log(Math.floor(Math.random()*10) + 1);


const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)