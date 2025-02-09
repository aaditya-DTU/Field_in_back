// var has global scope
// scope is where we can access variable or not 

// scope in windows is different from scope in browser
let a = 300

if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);

function one() {
    const username = "Aadiii"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);    error cuz website is not accessible here
    
    two()
}

one()

