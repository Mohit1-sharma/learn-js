// switch (key) {
//     case value:
//         break;

//     default:
//         break;
// }

const month = 8

switch (month) {
    case 1:
       console.log("January");
        break;
    case 2:
       console.log("febuary");
        break;
    case 3:
       console.log("march");
        break;
    case 4:
       console.log("april");
        break;
    

    default:
        console.log("default month matched");
        
        break;
}

// falsy value
// false, 0, -0,BigInt, "", null ,undefined, NaN

// Nullish coalescing operator (??): null undefined
let val1;
 val1 = 10 ?? null






 console.log(val1);

 const iceTeaPrice = 100;

 iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
