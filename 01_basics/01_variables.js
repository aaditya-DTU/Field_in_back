const accountId = 144553
let accountEmail = "aaditya@dtu.ac.in"
var accountPass = "12345"
accountCity = "Jaipur"

// accountId = 2

accountEmail = "hdfc@gmail.com"
accountPass = "2121212"
accountCity = "Bengaluru"  //possible but worst declaration
let accountState;

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPass, accountCity, accountState])

