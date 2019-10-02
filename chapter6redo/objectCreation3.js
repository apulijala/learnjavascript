class Rabbit {

    constructor(type, hello) {
        this.type = type;
    }
    
    speak(line) {
        console.log(`The ${this.type} says '${line}'`)
    }   
}

let killerRabbit = new Rabbit("Killer");
let blackRabbit = new Rabbit("Black");

killerRabbit.speak("I am a killer");
blackRabbit.speak("I am black");

// Object overriding. 
Rabbit.prototype.teeth = "Small";
console.log("Before overriding the teeth property");
console.log(blackRabbit.teeth);

killerRabbit.teeth = "long, sharp, and bloody";
console.log("Killer Rabbit's teeth are " + killerRabbit.teeth);

console.log(blackRabbit.teeth);
console.log("Black Rabbit's teeth are " + blackRabbit.teeth);
console.log("Rabbit prototype's teeth " + Rabbit.prototype.teeth);

