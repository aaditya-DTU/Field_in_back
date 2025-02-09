// js arrays are resizable
// in arrays elements of differnt datatype can exists
// it is a object
// js arrays are zero-indexed

// js array-copy operations create shallow copies{whose properties share the same reference} rather than deep copies{it is a copy whose properties do not share the same reference}

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[3]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(8)   time taking operation because position of every element get changed
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(4));
// console.log(myArr.indexOf(9));

// const newArr = myArr.join()   //it's datatype is string

// console.log(myArr);
// console.log(newArr);

// slice {call by value}, splice {call by reference}
// last index excluded      last index included

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)     //call by value

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3)  //call by reference i.e after this original array will change
console.log(myn2);
console.log("C ", myArr);

