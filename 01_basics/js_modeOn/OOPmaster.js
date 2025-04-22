//Abstraction

class coffeMachine {


    start(){
        

        return `Starting the macchine...`;
    }

    brewCoffee(){


        return `brewing coffee`;
    }
}

let myMachine = new coffeMachine()
console.log(myMachine.start())
console.log(myMachine.brewCoffee())
