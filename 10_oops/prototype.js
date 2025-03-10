// let myName = "Aaditya    "
// let mySurname = "Pandey   "


// console.log(myName.length);    returns 8
// console.log(myName.truelength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.wavyy = function(){      // gave it to all objects
    console.log(`Mahaul pura wavyy`);
}

// heroPower.wavyy()
myHeros.wavyy()


// if any property injected in array then it will not present is "Object"
Array.prototype.baawee = function(){
    console.log(`Muda pidd daaa`);
}

myHeros.wavyy()
myHeros.baawee()
// heroPower.baawee()    will show error


// Inheritance

const User = {
    username: "Aaditya",
    email: "aadiexample@gmail.com"
}

const teacher = {
    makevideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport       // to link objects
}

teacher.__proto__ = User


// modern syntax
Object.setPrototypeOf(TeachingSupport, teacher)

let anotherUSername = "kahaanighrghrki     "
String.prototype.truelength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUSername.truelength()