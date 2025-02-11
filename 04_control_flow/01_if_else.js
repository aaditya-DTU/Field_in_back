// if
const condition = true
if(condition){      //condition should be true

}

// <, >, <=, >=, ==, ===, !, !=

// const temperature = 41
// if(temperature < 50) {
//     console.log(`Temperature is ${temperature}`);
// }

// const score = 200

// if(score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }


// const balance = 1000

// if(balance > 500) console.log("text");          //implicit scope

// if(balance < 500) {
//     console.log("Less than 500");
// } else if(balance < 750) {
//     console.log("Less than 750");
// } else if(balance < 900) {
//     console.log("Less than 900");
// } else{
//     console.log("Less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const loggedINFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedINFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}