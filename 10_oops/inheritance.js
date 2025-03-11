class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username , email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacherOne = new Teacher("Aadii", "aadi@example", "1234")

teacherOne.addCourse()

const teacherTwo = new User("Aaditya")
// teacherTwo.addCourse()            will throw an error

teacherTwo.logMe()

console.log(teacherOne instanceof Teacher);
console.log(teacherOne instanceof User);
console.log(teacherOne === Teacher);

