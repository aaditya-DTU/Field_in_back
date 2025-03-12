class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){ // getter and setter bn jaate h automatically for a property
        return `${this._password}aaditya`
    }

    set password(value){
        this._password = value
    }
}

// after defining setters and declaring values in constructor using same variable name....we get "Maximum call stack size exceeded" error


// getter and setter are used to gain fine grain control, returning encrypted password or not to tell, to give access to limited users

const aadi = new User("a@aaditya.in", "1234")
console.log(aadi.password);
console.log(aadi.email);