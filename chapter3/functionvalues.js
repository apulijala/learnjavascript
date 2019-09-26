var launchNow = function() {
    console.log("Launch Missiles Now!");
}

var abortLaunch = function() {
    console.log("Abort Missile Launch !!");
}

doLauch = true;
missileLaunch = doLauch ? launchNow : abortLaunch;
missileLaunch();

var power = function(base, exponent) {

    var result = 1;
    if (exponent == undefined) {
        exponent = 2;
    }

    for (var k = 0; k < exponent; k++) {
        result *= base;
    }
    return result;
}

var result = power(2);
console.log("result should be 4 " + result);


var result = power(2, 3);
console.log("result should be 8 " + result);