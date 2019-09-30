let rabbit = {};
rabbit.speak = function(line) {
    console.log(`Rabbit says ${line}`);
}
rabbit.speak("Rama's Glory!");

function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
}
var whtieRabbit = {
    type : "White",
    "speak" : speak
};

whtieRabbit.speak("'Oh my ears and whiskers, how" + " late it's getting!");
