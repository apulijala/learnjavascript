// takes an array, combine higher order function and 
// a start element.
function reduce (array, combine, start) {
    let current = start;
    for (let i of array) {
        current = combine(current, i);
    
    }
    return current;
}

let result = reduce([1,2,3,4 ], (a,b) => a + b, 0);
console.log(result);