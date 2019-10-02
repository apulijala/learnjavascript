/*
let rabbit = {

};
rabbit.speak = function() {
    console.log("I'm alive");
}

rabbit.speak();
*/
let rabbit = {
    spaek : function() {
        console.log("I'm alive");
    }
};

rabbit.spaek();
let redRabbit = Object.create(rabbit);
redRabbit.spaek();

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}   

let whiteRabbbit = {
    type : "White",
    speak
}

let hungryRabbit = {
    type : "Hungry",
    speak
}

whiteRabbbit.speak("Oh my ears and whiskers, " + 
    "how late it's getting!");
hungryRabbit.speak("I could use a carrot right now.");
function normalize() {
    console.log(this.coords.map(k => k / this.length));
}
normalize.call({coords: [0, 2, 3], length : 5});

console.log(Object.getPrototypeOf(Math.max));
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
console.log(Object.getPrototypeOf(whiteRabbbit));
console.log(Object.getPrototypeOf([]));
console.log(Object.getPrototypeOf([])  == Array.prototype);
