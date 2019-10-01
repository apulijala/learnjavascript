// takes an array, combine higher order function and 
// a start element.
function reduce(array, combine, start) {
    let current = start;
    for (let item of array) {
        current = combine(current, item);
    }
    return current;
}


let result = reduce([1,2,3,4 ], (a,b) => a + b, 0);
console.log(result);

console.log([1,2,3,4].reduce((a,b) => a + b, 11));