// 'this' refers the current context

const user = {
    username: "Aaditya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // {} cuz we are in node environment and in global there is no context
// when we do this in brower, we get windows as a global context

// function chai() {
//     // console.log(this);
//     let username = "aadii"
//     console.log(this.username);
    
// }

// chai()  // here we get too much stuff when we use only console.log(this) in function

// THIS NOT WORKS IN THE FUNCTIONS, IT WORKS IN OBJECTS


// ---------Arror Function------------
// const chai = function() {
//     let username = "Aaditya"
//     console.log(this.username);        output is "undefined"
// }
const chai = () => {
    let username = "Aaditya"
    console.log(this);   //{}
}

// chai()

// Explicit Return
// const add2 = (num1, num2) => {
//     return num1 + num2
// }

// Implicit Return
// const add2 = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "pandey"})   //returning a object

console.log(addTwo(2,5));
