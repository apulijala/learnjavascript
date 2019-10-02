function sayHello(word) {
    console.log(word);
}

let protoRabbit = {
    "hello" : "world",
      speak(line) {
        console.log(`The ${this.type} rabbit says ${line} `);
    },
     sayHello
}


whiteRabbit = Object.create(protoRabbit);
protoRabbit.type = "Proto";
whiteRabbit.type = "White";
console.log(protoRabbit.hello);
protoRabbit.speak("Hello World!");
whiteRabbit.speak("White Rabbit says ");
whiteRabbit.sayHello("This word");


class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line} `);
    }
}
let rabbit = new Rabbit("rabbit");
rabbit.newProp = "value";
rabbit.speak("hello");
console.log(rabbit.newProp);

/*
function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} Rabbit says ${line}`);
}

let oneRabbit = new Rabbit("One");
oneRabbit.speak("My World");

console.log(Object.getPrototypeOf({}));
console.log(Object.prototype);

let myArray = [];
console.log(Object.getPrototypeOf(myArray));
console.log(Array.prototype);
console.log(Object.getPrototypeOf(Rabbit));
console.log(Function.prototype);
*/

