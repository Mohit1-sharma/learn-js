for (let i = 0; i <= 10; i++) {
   // console.log(`Outer loop value ${i}`);
    
    for (let j = 0; j <= 10; j++) {
       // console.log(`Inner loop value ${j} and Outer loop value ${i}`);
       // console.log(i + '*' + j + '=' + i*j );
    }
}
let myArray = ["mohit","apsara","kanchi"]

for (let index = 0; index <=20; index++) {
    const element = index;

    if(element == 5){
      //  console.log('detected')
        continue;
    }
   // console.log(element);
    
    
}
// while loop and do while loop

let index = 0
while (index <= 10) {
  //  console.log(`value of index is ${index}`);
    index = index + 2
}

let arr = 0
while(arr < myArray.length){
    console.log(`value is ${myArray[arr]}`)
    arr = arr + 1
    
}

let score = 11;

do {
    console.log(`score is ${score}`)
    score++
} while (score <= 10);
 

