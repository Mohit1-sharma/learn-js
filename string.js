const name = "Mohit"
const repoCount = 50

//console.log(name + repoCount + " Value");
// donot use this

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
// use this instead
//declaration

const gameName = new String('Hitesh-fc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));


const newString = gameName.substring(0 , 4)
//0 index se 3rd tkk print hoga....
//end vakue not included....
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Mohit.com/Mohit%20Sharma"
console.log(url)
console.log(url.replace('%20','-'))
console.log(url.includes('mohit'))

console.log(gameName.split('-'))