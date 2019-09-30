let rabbit = {};
rabbit.speak = function(line) {
    console.log(`Rabbit says ${line}`);
}
rabbit.speak("Rama's Glory!");

function speak(line) {
    console.log(`The ${this.type} Rabbit says '${line}'` );
}

var whtieRabbit = {
    spaek : speak,
    type : "White"
};

var hungryRabbit = {
    speak : speak,
    type : "Hungry"
};

whtieRabbit.spaek("Oh my ears and whiskers, how late it's getting!");
hungryRabbit.speak("I could use a carrot right now.");

speak.call(hungryRabbit, "Burp!");

function normalize() {
    return this.coords.map(coord => {return coord/this.length});
}

console.log(normalize.call({ coords:[0, 2, 3], length : 5}));

console.log(whtieRabbit.toString());

let emtpy = {};
console.log(emtpy.toString());

