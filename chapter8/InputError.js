"use strict";

class InputError extends Error {
}


function promptDirection(direction) {

    if (direction.toLowerCase() == "l") {
        return "L";
    }else if (direction.toLowerCase() == "r") {
        return "R";
    }   
}
