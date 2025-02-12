const code = ["js", "ruby", "py", "java", "cpp"]

// Array.forEach(function declaration)

// code.forEach( (item) => {
//     console.log(item);
// } )

function printMe(item) {
    console.log(item);
}

// code.forEach(printMe)     //ensure you have to give reference of function

code.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
    
} )


const myCode = [
    {
        langName: "javascript",
        langFile: "js"
    },
    {
        langName: "java",
        langFile: "java"
    },
    {
        langName: "python",
        langFile: "py"
    }
]

myCode.forEach( (item)=> {
    console.log(item.langFile);
    console.log(item.langName)
} )