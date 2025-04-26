//Abstraction

class coffeMachine {


    start(){
        

        return `Starting the macchine...`;
    }

    brewCoffee(){


        return `brewing coffee..`;
    }

    pressStartButton(){
      let msgOne =  this.start()
      let msgTwo =  this.brewCoffee()

      return `${msgOne} + ${msgTwo}`;
    }
}

let myMachine = new coffeMachine()
// console.log(myMachine.start())
// console.log(myMachine.brewCoffee())
//console.log(myMachine.pressStartButton())


//Polymorphism
// the ability of something to have or to be displayed in more than one form

class Bird {
    fly(){
        return `Flying...`
    }
}

class Penguin extends Bird {
    fly(){
        return 'Penguin can not fly..'
    }
}

let bird = new Bird()
let penguin = new Penguin()

// console.log(bird.fly())
// console.log(penguin.fly())


//Static Method

class calculator {
    static add(a,b){
        return a+b
        //Static method can only be called by class itself
    }
}

// let miniCalc = new calculator()
// console.log(miniCalc.add(2,3))

// Not allowed in case of static

//console.log(calculator.add(2,4));


//----Getter and Setter----
class employee{
    constructor(name,salary){
        this.name = name;
        this._salary = salary
    }

    get salary(){
        return `You are not allowed to see salary`;
    }

    set salary(value){
        if(value < 0){
            console.error('Invalid Salary')
        }else{
            this._salary = value
        }
    }
}

let emp = new employee("Alice", 50000)
console.log(emp._salary);

// Encapsulation
//Restricting the direct access to object data

class bankAccount {

    #balance = 0;

    deposit(amount){
        this.#balance += amount
        return this.#balance;
    }

    getBalance(){

        return `${this.#balance}`;
    }
}

let account = new bankAccount()
console.log(account.getBalance())


//class and objects

let car = {
    make : "Toyota",
    model: "canry",
    start : function(){
        return `${this.make} car got started in ${this.model}`;
    }
}
console.log(car.start())

class vehicle {
    constructor(make,model){
        this.make = make
        this.model = model
    }

    start(){
        return `${this.model} is a car from ${this.make}`
    }
}

// class car extends vehicle {

//     drive(){
//         return `${this.make}:This is an inheritance example`;
//     }
   
// }