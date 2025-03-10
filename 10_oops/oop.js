const user = {
    username: "Aaditya",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}

console.log(user.username);
console.log(user.getUserDetails());


// construction function
const promiseOne = new Promise()
const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this     // it is optional by default return hota h
}

const userOne = new User("Aadiii", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);
console.log(userTwo);
// console.log(userOne.constructor);    it gives the reference of the function


// by doing upper thing...values overwrite hoti h and new instances create nhi hote h.....add "new" keyword

// after using new keyword
// 1) new object is created
// 2) a constructor function is called
// 3) all the arguments inject in "this"
// 4) we got it in the function

