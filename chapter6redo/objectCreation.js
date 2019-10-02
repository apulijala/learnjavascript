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
rabbit.speak("hello");