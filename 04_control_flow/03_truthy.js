const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}


// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Rest are true value
// "0", "false", " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// false = 0     true
// false = ''    true
// 0 == ''       true


// Nullish Coalescing Operator (??): undefined

let val1;
// val = 5 ?? 10        // 5
// val1 = null ?? 10       // 10
// val1 = undefined ?? 15     // 15
// val1 = null ?? 10 ?? 100      // 10

// console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("more than 80")


