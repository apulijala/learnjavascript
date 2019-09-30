class Rabbit {
    constructor(type) {
        this.type = type;
    }
    
     speak(line) {
        console.log(`The ${this.type} Rabbit says '${line}'`);
    }
}
let  killerRabbit = new Rabbit("Killer");
killerRabbit.speak("I am a killer rabiit");

var object = new class{
    getWord() {
        return("This is a word");
    }
}

console.log(object.getWord());

