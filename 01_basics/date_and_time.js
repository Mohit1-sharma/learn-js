// Temporal Api
let myDate = new Date();
//console.log(myDate.toString());
console.log(myDate.toDateString);
//console.log(myDate.toLocaleString());


let myCreatedDate = new Date("2025-06-28");
console.log(myCreatedDate.toLocaleString());

let mytimestamp = Date.now();
//
// console.log(mytimestamp);

console.log(Math.floor(Date.now()/1000));
