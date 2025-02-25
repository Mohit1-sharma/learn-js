const myArr = [0,1,2,3,4,5,true,"Mohit"]

//Array

// resizeable,mix datatypes, not associative

// shallow copies -> an object is a copy whose properties share the same ref
//deep copies -> donot share same ref

const myHeroes = ["Shaktiman" , "nagraaj"]

const myArr2 = new Array(1,2,3,4,5)

// different  ways to declare the array

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9)
myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));


const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// method SLICE and SPLICE

console.log("A ", myArr);

const myn1 = myArr.slice(1,3) // include 1,2 but not 3

console.log(myn1);

console.log("B ", myArr);

const myn2 = myArr.splice(1,3) 
console.log("C ", myArr);// include 1,2,and 3 as well
console.log(myn2);
// in SPLICE orignal array is manipulated




