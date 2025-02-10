function sayMyName (){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}

// sayMyName    reference
// sayMyName()   function call

// function add2Nums (num1, num2){
//     console.log(num1 + num2);   
// }

function add2Nums (num1, num2){
    // let result = num1 + num2
    // return result  
    return num1 + num2
}

const result = add2Nums(4,11)
// console.log(result);

function loginUserMessage(username) {
    if(username === undefined){
        console.log("Please enter username");
    }
    else return `${username} just logged in`
}

const mssg = loginUserMessage("Aaditya")
// console.log(mssg);

// when we don't pass any argument in function, it return 'undefined'
// console.log(loginUserMessage());


// using rest operator
// function calculateCartPrice(...num1){
//     return num1
// }
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,1000));

const user = {
    username: "Aadiii",
    price: 299
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObject(user)