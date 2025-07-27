new Promise(function(resolve,reject){

  setTimeout(function(){
    console.log("Async task two")
    resolve()
  },1000)
}).then(function(){
  console.log("Promise completed");
})


const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({
      userName : "Mohit",
      email : "cod ewmcbwei@gamil.com"
    })
  },1000)

})

promiseThree.then(function(user){
  
  console.log(user.userName,"----------");

})

const promiseFour = new Promise(function(resolve, reject){

  setTimeout(function(){
    let error = false;
    if(!error){
      resolve({userName:"Mohitqwq",pass:"123"})
    }else{
      reject('Error : Something went Wrong')
    }
  },1000)
})

promiseFour.then((user)=> {
  console.log(user)
  return user.userName
}).then((storingData)=>{
  console.log(storingData)
}).catch(function(err){
  console.log(err)
}).finally(()=>{
  console.log("Promise has been either rejected or resolved")
})

const promiseFive = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = true;
    if(!error){
      resolve({userName:"Js",pass:"123"})
    }else{
      reject('Error :JS Something went Wrong')
    }
  },1000)
})

// we can also connect it with async await

async function consumePromiseFive(){
  try{
    const response =  await promiseFive;
    console.log(response);
  }catch(err){
    console.log(err);
  }
 
 
}

consumePromiseFive();

// async function getAllUsers() {

//  try {
//       const response =  await fetch('http://jsonplaceholder.typicode.com/users')
//       const data = await response.json();
//       console.log(data);
//  } catch (error) {
//   console.log("E :", error);
  
//  }
 
  
// }

// getAllUsers();

//one more way to handle await with then catch 

fetch('http://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return response.json();
}).then((data)=>{
  console.log(data)
})
.catch((error)=>{
  console.log(error)
})