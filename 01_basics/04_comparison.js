// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);


//equality check and comparsion work differently
//comparisons convert null to a number, treating it as 0
console.log(null > 0);      //false
console.log(null == 0);      //false
console.log(null >= 0);     //true

console.log(undefined == 0);      //false
console.log(undefined > 0);      //false
console.log(undefined >= 0);    //false

// === strict check in that it check datatype also




