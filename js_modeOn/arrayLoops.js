//Arrays loops
// for each

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greeting = "Hello world!"
for(const greet of greeting){
   // console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United Ststes")
map.set('Fr',"France")
map.set('IN',"India")

console.log(map)

for (const [key,value] of map) {
   // console.log(key+':-'+value);
    
}

const myObject = {
    js: 'java script',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}
for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

const prog = ['js','rb','py','java','cpp']

for(const key in prog){
    console.log(prog[key]);
    
}