// for of 
// ["","",""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const char of greetings) {
    // console.log(char);
}

// Maps : is a object holds key-value pairs and remember the original insertion order of keys. Keys are unique in the map
const map = new Map()
map.set('IN', "India")
map.set('FR', "France")
map.set('GEM', "Germany")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObj = {
    'game1': 'NFS',
    'game2': 'BGMI',
    'game3': 'COC'
}

// for (const games of myObj) {         not run because objects are not iterable
//     console.log(games);              in "forof" loop
// }



