"use strict";

class InputError extends Error {
}


function promptDirection(direction) {

    if (direction.toLowerCase() == "l") {
        return "L";
    }else if (direction.toLowerCase() == "r") {
        return "R";
    } else {
        throw new InputError("Invalid Direction");
    }  
}

try {

    console.log("You chose " + promptDirection("l"));
    console.log("You chose " + promptDirection("R"));
    console.log("You chose " + promptDirection("n"));

}catch (error) {
    
    if (error instanceof InputError) {
        console.log(error);
    }else {
        throw error;
    }
}