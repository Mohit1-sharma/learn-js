// Primitive


// 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt(ye call by reference hote hai)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false

const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 234564567654343343243n
//console.log(bigNumber);



//Reference (non primitive) -- call by value
// Array,Objects,Functions

const heros = ["shaktiman","nagraj","dog"]
let myObj = {
    name:"Mohit",
    age:22,
}

 const myFunction = function(){
    console.log("Hello World");
    
 }

 console.log(typeof bigNumber)
 console.log(typeof myFunction)
 console.log(typeof myObj)
 console.log(typeof outsideTemp)
 console.log(typeof heros)
 