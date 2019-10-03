"use strict"
function numberToString(n, base = 10) {

    let result = "", sign = "";
    if (n < 0) {
        n = -n;
        sign = "-";
    }

    do {
        result = n % base + result;
        n = Math.floor(n/base);

    }while(n > 0);
    return sign + result;
}

function numberToStringRecursive(n, base = 10) {
    
    function helperRecursive(n, result) {
        if (n > 0 ) {
            return result;
        }else {
            return helperRecursive(Math.floor(n/10),n %10 + result);
        }

    }
    return helperRecursive(n, "");
}

console.log(numberToString(13,10));
console.log(numberToString(-13,10));

// Recurisve functions.

console.log(numberToStringRecursive(13,10));
console.log(numberToStringRecursive(-13,10));

