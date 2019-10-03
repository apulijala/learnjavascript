"use strict"

function promptDirection(direction) {
    if (direction.toLowerCase() == "l") {
        return "L";
    }
    else if (direction.toLowerCase() == "r") {
        return "R";
    }else {
        throw new Error("Invalid direction : " + direction);
    }
}

function look(direction)  {

    if (promptDirection(direction) == "L") {
            console.log("A house.");
    }else if (promptDirection(direction) == "R") {
            console.log("Two Angry Bears");
    }
}

try {
    look("l");
    look("R");
    look("N");

    look("L");
    look("r");
    look("n");
}catch (error) {
    console.log("Something went wrong! " + error);
}

