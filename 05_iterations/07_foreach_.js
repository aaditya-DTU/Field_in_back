const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.map( (num)=> num + 10 )

const newNums = myNums
                .map( (num)=> num*10 )       // this is known as chaining
                .map( (num)=> num + 1 )
                .filter( (num)=> num >= 40 )

console.log(newNums);


// reduce method
const nums = [1,2,3]

// const myTotal = nums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = nums.reduce( (acc, curr)=> acc+curr, 0 )

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: "cpp course",
        price: 399
    },
    {
        itemName: "java course",
        price: 499
    },
    {
        itemName: "py course",
        price: 799
    }
]

const bill = shoppingCart.reduce( (acc,item) => acc + item.price, 0 )

console.log(bill);
