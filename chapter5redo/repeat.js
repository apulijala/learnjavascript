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

console.log("Producing Units");


