function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} Rabbit says '${line}' `);
}
Rabbit.prototype.hello = "world";

var weiredRabbit = new Rabbit("weird");
weiredRabbit.speak("weird");