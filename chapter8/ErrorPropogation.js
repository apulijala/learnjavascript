"use strict"
function promptNumber(n) {
    if (isNaN(n)) {
        return null;
    }
    return n;
}

console.log(promptNumber(10));
console.log(promptNumber("!!hello!!"));
console.log(promptNumber('100F'));
console.log(promptNumber("10"));

function lastElement(array) {

    if (array.length == 0) {
        return {failed : true};        
    }
    return {eleemnt : array[array.length -1]};
}

console.log(lastElement([]));

console.log(lastElement([1,2,101, -9] ));
