"use strict";
function canYouSpotTheProblem() {
    for ( let counter = 0; counter < 10; counter++) {
        console.log("Happy happy");
    }
}

canYouSpotTheProblem();

function Person(name) {
    this.name = name;
}

let ferdinand =  new Person("Ferdinand");