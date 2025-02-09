// singleton....koi bhi constructor se bnega toh singleton object bnega
// rest se multiple instances bn jaate h

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Aaditya",
    "full name": "Aaditya pandey",
    // mySym: "myKey1",   //it is string not symbol
    [mySym]: "myKey1",
    age: 20,
    location: "Delhi",
    email: "aadi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "openai@gmail.com"
// Object.freeze(jsUser)

jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    // console.log("Hello, js user");  
    console.log(`Hello, ${this["full name"]}`);
      
}

console.log(jsUser.greeting);  // function reference will return
// console.log(jsUser.greeting);  // if freeze kr dia uske baad ye "undefined" return krega

console.log(jsUser.greeting());  //error not a fuction




