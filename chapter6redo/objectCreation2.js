function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} Rabbit says '${line}'`);
}

let weiredRabbit = new Rabbit("weird");
weiredRabbit.speak("Datta Digambara!!");

console.log(Object.getPrototypeOf(weiredRabbit));
console.log(Object.getPrototypeOf(weiredRabbit) == Rabbit.prototype);
console.log( Rabbit.prototype);

/*
console.log( Object.getPrototypeOf(Rabbit));
console.log(Object.getPrototypeOf(Array.prototype));
console.log(Object.getPrototypeOf(Object.prototype));
*/

