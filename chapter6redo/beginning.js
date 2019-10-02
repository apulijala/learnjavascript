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
    console.log(`The ${this.type} rabbit says ${line}`);
}   




