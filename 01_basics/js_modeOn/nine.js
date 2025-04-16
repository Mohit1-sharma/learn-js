//reduce

const arr = [1,2,3]

// const myTotal = arr.reduce(function(acc,currVal){
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
    
//     return acc + currVal

// },3)
// const myTotal = arr.reduce((acc,currVal)=> acc + currVal,0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price:2999
    },
    {
        itemName: "python course",
        price:999
    },
    {
        itemName: "mobile dev course",
        price:5999
    },
    {
        itemName: "data science course",
        price:12999
    },
]

const total = shoppingCart.reduce((acc,item) => acc+item.price ,0)
//console.log(total);


// high order function..
function makeTea(typeOfTea){
    return `maketea:${typeOfTea}`
}


function processTeaOrder(teaFunction) {
  return  teaFunction("earl grey")
}

let order = processTeaOrder(makeTea)
//console.log(order);



function createTeaMaker(name){
    let score = 100
    return function(teaType){
        return `Making ${teaType} ${name} ${score}`;
    }
}

let teaMaker = createTeaMaker("Mohit")
let result = teaMaker("green tea");

console.log(result);

