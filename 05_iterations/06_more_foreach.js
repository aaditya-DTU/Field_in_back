// const code = ["js", "ruby", "py", "java", "cpp"]

// const values = code.forEach( (item)=> {     //it does not return anything
//     console.log(item);
//     return item
// } )

// console.log(values);


const myNum = [1,2,3,4,5,6,7,8,9,10]

// myNum.filter( (num)=> num > 4 )     //return values
// const newNums = myNum.filter( (num)=> num > 4 )

// const newNums = myNum.filter( (num)=> {
//     return num > 4
// } )
// console.log(newNums);

const newNums = []
myNum.forEach( (num)=> {
    if(num > 4) newNums.push(num)
} )

// console.log(newNums);


const books = [
    {title: 'Book1' , genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book2' , genre: 'Non-Fiction', publish: 1981, edition: 2004},
    {title: 'Book3' , genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book4' , genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book5' , genre: 'Non-Fiction', publish: 1981, edition: 2005},
    {title: 'Book6' , genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book7' , genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book8' , genre: 'Non-Fiction', publish: 1981, edition: 2005},
]

// console.log(books);

const userBooks = books.filter( (bk)=> bk.genre === 'Non-Fiction')

const userBooks2 = books.filter( (bk)=> bk.edition === 2005 )

console.log(userBooks2);
