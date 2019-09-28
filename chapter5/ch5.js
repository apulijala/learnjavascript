function repeat(n, action) {

    for(var i = 0; i < n; i++) {
        action(i);
    }
}

repeat(5, console.log);
var labels = [];
repeat(5, k => {

    labels.push(`Unit ${k + 1}`);
});
console.log(labels);

// define an inner function and return it. 

function greaterThan(n) {
    function testGreaterThan(m) {
        return m > n;
    }
    return testGreaterThan;
}

let greaterThan10 = greaterThan(10);
console.log("Is 11 greater than 11 ? ");
var greaterThan = greaterThan10(11);
console.log(greaterThan);

function greterThanWithExpression(n) {
    return m => m > n;
}

greaterThan10 = greterThanWithExpression(10);
console.log("Is 11 greater than 11 ? ");
greaterThan = greaterThan10(11);
console.log(greaterThan);







