class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){      // static is used to stop any method from execution for every user
        console.log(`${this.username}1234`) 
    }
}

const aadii = new User("Aaditya")
// aadii.createId()

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const client = new Teacher("Ram Singh", "singh@phone.com")
client.logMe()
client.createId()
