// Immediately Invoked Function Expression
// Global scope ke pollution se problem hoti h
// To prevent that we use iife

(function chai() {
    // named iife
    console.log(`DB Connected`);
})();

// iife does not know where to stop, so end that statement with ";"
// vrna error show hoga

( (name) => {
    console.log(`DB connected ${name}`);
    
} )("Aaditya");


// chai()