const temp = 11

if(temp === 41){
    console.log("temp is smaller than 50");
    
}else{
    console.log("temp is greater than 50");
    
}

const score = 200

if(score > 100){
    const power = " fly "
    console.log(`user power: ${power}`);

    
}

// shorthand Notation 
const balance = 1000;
if(balance < 500) {
    console.log("less than 500");
    
}else if (balance < 750) {
    console.log("less than 750")
}else if(balance < 900) {
    console.log("less than 900");
    
}else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard && 2 == 2){
    console.log("Allow to buy course");
    
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("user Logged In");
    
}