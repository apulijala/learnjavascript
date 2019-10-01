function repeat(n, action) {

    for (i = 0; i < n; i++) {
        action(i);
    }
}
console.log("print all numbers from 0 to 2")
repeat(3, console.log);
console.log("print all even numbers")
repeat(11, n => {
    if (n%2 == 0) {
        console.log(n);
    }
});

function testRepeat(n) {
    if (n%2 == 0) {
        console.log(n);
    }
}
console.log("Test Repeat");
repeat(11, testRepeat);

function greaterThan(n) {
    return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log("output of greater than");
console.log(greaterThan10(11))

console.log("output of greater than without intermediate variable");
console.log(greaterThan(10)(11));

console.log("Producing Units");
let allunits = [];
repeat(4, i => { 
    allunits.push(`Unit ${i + 1}`);
});
console.log(allunits);

function noisy(f) {

    return (...args) => {
        console.log("calling function with ", args);
        let result = f(...args);
        console.log("Called function with ", args , " and the result is " , result);
        return result;
    }
}

let result = noisy(Math.max)(3, 2, 1);
console.log(result);

result = noisy(Math.min)(3, 2, 1);
console.log(result);