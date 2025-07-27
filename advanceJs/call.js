function setUsername(userName){
    this.userName = userName;
}

function createUser(userName,email,password){

    setUsername.call(this,userName)// this is just a refrence we are not calling it explicitily
    this.email = email
    this.password = password
}

const chai = new createUser("chai","abc@gmail.com","1213")

console.log(chai);