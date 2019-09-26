var square = function(x) {return x*x;}
console.log(" square of 2 is " + square(2));

var makeNoise = function (tobeLogged) {
    console.log("Make Noise! " + tobeLogged);

}

makeNoise("Arvind Kumar Pulijala");

var power = function(base, exponent) {

    let result = 1;
    for (var x = 0; x < exponent; x++) {
        result = result*base;
    }
    return result;
}
console.log("Power is " + power(2,10));


var x = "outside";
console.log("valud of x outside function block is  " + x);
function f1() {
    x = "Inside f1";
    console.log("value of x inside f1 is  " + x);
}

function f2() {
    x = "Inside f2";
    console.log("valud of x inside f2 is " + x);
}
f1();
f2();
z();



