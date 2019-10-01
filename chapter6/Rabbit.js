function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} says '${line}'`);
}

var weiredRabbit = 
    new Rabbit("weired");
weiredRabbit.speak("weired!");

console.log("Rabbit's prototype is ");
console.log(Object.getPrototypeOf(Rabbit));
console.log(Rabbit.prototype);


console.log("Weired Rabbit's prototype is ");
console.log(Object.getPrototypeOf(weiredRabbit));
console.log(weiredRabbit.prototype);


console.log([101, 102, 300, 145].some(i => { console.log (i); return i > 200}));



