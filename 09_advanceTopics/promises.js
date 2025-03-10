// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value !
// used in cryptography...networking....file reading etc
// promise is in three states.....pending, fulfilled, rejected

// Q.....bluebird libraries
// 8:00 to 12:00....history

const promiseOne = new Promise(function (resolve, reject) {
    // do and sync tasks
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log('Async task is complete');
        resolve()          // now it is connected with then
    }, 1000)
})

promiseOne.then(function () {      // resolve ka connection h .then k saath
    console.log('Promise consumed');
})


// alter way to write
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function () {
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: "Chai", email: "chai@example.com" })
    }, 1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "hitesh", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 2000)
})

// promiseFour.then().catch()      .then se value le lunga and if error aaya toh .catch laga k value le lunga


// this is called "chaining of then and catch" uper wale then se jo value aa rhi wohi niche jayegi and so on
promiseFour.then((user) => {      // we can't store it in a variable
    console.log(user);
    return user.username          // ye value ja kaha rhi h ?
}).then((username) => {
    console.log(username);
}).catch(function (error) {         // to handle error
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))  // act as a default statement



const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Aaditya", password: "kirrmada" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFice() {        // another approach to handle error
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFice()

// jsonplaceholder.typicode.com/users..........for api request

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()   // we need to use await here cuz...it takes times
        console.log(data);
    } catch (error){
        console.log("E: ", error);
    }
}

getAllUsers()

// now creating same thing with then catch and finally
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})
.finally(() => {
    console.log("Data received");
})
