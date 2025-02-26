// singleton

//object literals

//object.create
const mySym = Symbol("key1")

const JsUser = {
    name: "Mohit",
    "full name" : "Mohit Sharma",
    mySym: "mykey1",
    age : 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays: ["monday", "saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])


JsUser.email = "mohit@chatgpt.com"
// console.log(JsUser.email);
//Object.freeze(JsUser)

JsUser.email = "hello@gmail.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");

}
JsUser.greetingtwo = function(){
    console.log(`Hello Js User, ${this.name}`);

}



console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());
