function SetUsername(username){
    // complex DB calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    // SetUsername(username)           ye call hi nhi ho rha h
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const chai = new createUser("chaii", "chai@fb.com", "1234")
console.log(chai);