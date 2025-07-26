const user = {
    username: "hitesh",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.username} , welcome to the website`);
        console.log(this);
        
    }
}

// user.welcomeMsg()
// user.username = "chomu"
//user.welcomeMsg()

//console.log(this);

// const chai = function() {
//     let username ="hitesh"
//     console.log(this.username);
    
// }
// chai()
// arrow function
const chai = () =>   {
    let username ="hitesh"
    console.log(this);
    
}
chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// implicit return in arrow function
const addTwo = (num1, num2) =>  num1 + num2
   
const addTwo1 = (num1, num2) =>  (num1 + num2)

console.log(addTwo(3,4))
console.log(addTwo1(3,4))