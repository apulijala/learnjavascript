console.log(Object.getPrototypeOf({}));

console.log(Object.getPrototypeOf({}));
console.log(Object.prototype);

console.log(Object.getPrototypeOf([]) == Array.prototype);
console.log(Array.prototype);
console.log(Function.prototype);

let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};
/*
var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "Killer";
killerRabbit.speak("SKREEEE!");
*/


function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

var killerRabbit = 
    makeRabbit("Killer");
killerRabbit.speak("SKREEEE!");










