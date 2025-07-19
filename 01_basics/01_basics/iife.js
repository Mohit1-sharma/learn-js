// IIFE -- Immediately invoked function expression

// to remove the variable or pollution in global scope we use iife
(function chai(){
    //Named iife
    console.log("DB Connected")
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
    
})('MOHIT ')