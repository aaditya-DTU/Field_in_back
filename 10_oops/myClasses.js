// After ES6

class userDetail {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new userDetail("chai", "chai@gmail.com", "1234")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// behind the scene
function client(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

client.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

client.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const clientOne = new client("Aaditya", "aadi@example.com", "1234")

console.log(clientOne.encryptPassword());
console.log(clientOne.changeUsername());
