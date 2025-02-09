const name = "Aaditya"
const gameName = new String('Mar-io')
const repoCnt = 10

// console.log(name + repoCnt + " Value");  outdated method

console.log(`Hello my name is ${name} and my rep count is ${repoCnt}`);   
// string interpolation

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const newStr = gameName.substring(0,4) //ending index is excluded
console.log(newStr);

const anotherStr = gameName.slice(1, 2)
console.log(anotherStr);

const newStr1 = "      aaditya  "
console.log(newStr1);
console.log(newStr1.trim());

const start = "https://aaditya.com/aaditya%20pandey"
console.log(start.replace('%20', '-'));
