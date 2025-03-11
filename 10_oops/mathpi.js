const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descriptor);
// output is this {
//     value: 3.141592653589793,
//     writable: false,            overwritable
//     enumerable: false,          iterable
//     configurable: false
//   }

console.log(Math.PI);

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Code fatt chukka h");
    }
}

console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai));    undefined 
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key, value] of Object.entries(chai)) {  //generally objects are not iterable
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}
