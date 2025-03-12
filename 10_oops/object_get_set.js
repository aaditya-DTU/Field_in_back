// this syntax is tooo much rare

const User = {
    _email: 'h@hc.com',      // private property
    _password: "abcd",


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User,)
console.log(tea.email);
