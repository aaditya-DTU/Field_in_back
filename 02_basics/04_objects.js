// const tinderUser = new Object()  singleton object
const tinderUser = {}     // non-singleton object

console.log(tinderUser);

tinderUser.id = "abc123"
tinderUser.name = "Aadii"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regulaUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            first: "Aaditya",
            last: "Pandey"
        }
    }
}

// console.log(regulaUser.fullname.userfullname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({} ,obj1, obj2)   {} optional thing but good practise to do or refer mdn for object assign


const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// data from a database comes like this
const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
]

// console.log(users[0].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// to check whether key exist or not
console.log(tinderUser.hasOwnProperty('isLogged'));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// de-structure
const course = {
    coursename: "js-in-eng",
    price: "999",
    courseTecher: "Hitesh"
}

// course.courseTecher

// const {courseTecher} = course
// console.log(courseTecher);

const {courseTecher: Master} = course
console.log(Master);


// API's se info JSON format m aati h
// {
//     "name": "Aaditya",
//     "courseName": "js-in-hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]