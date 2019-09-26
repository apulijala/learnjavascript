function wrapValue(n) {
    return function() {
        return n;
    };
}
console.log("Wrapped value is " + wrapValue(5)());

function multiplier(factor) {
    return function(number) {
            return factor * number;
    };
}

var twice = multiplier(2);
console.log(" Multiplier value is " + twice(5)); 

