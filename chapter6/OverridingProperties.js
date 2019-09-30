function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} says '${line}'`);
}
//Overriding at class level. Polymormhism.

Rabbit.prototype.toString = function() {
    return `a ${this.type} Rabbit`;
}


Rabbit.prototype.teeth = "Small";

let blackRabbit = new Rabbit("Black");
blackRabbit.speak("Black widow");
blackRabbit.teeth = "long, sharp, and bloody";
console.log(blackRabbit.teeth);

let redRabbit = new Rabbit("Red");
redRabbit.speak("Red is good");
console.log(redRabbit.teeth);
console.log(Object.prototype.toString);
console.log(Array.prototype.toString);
console.log(Object.prototype.toString.call([1, 2]));
console.log([1, 2].toString());
console.log(redRabbit.toString());

let sym = Symbol("name");
Rabbit.prototype[sym] = 55;
console.log(Symbol("name") == Symbol("name"));
console.log(blackRabbit[sym]);


const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function () {
    return `${this.length} cm of yarn`;
}

console.log([1,2,3].toString());
console.log([1,2,3][toStringSymbol]());



