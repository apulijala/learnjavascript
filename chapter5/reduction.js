function reduce(array, combine, start) {

    let current = start;
    for (elem of array) {
        current = combine(current, elem);
    }
    return current;
}

console.log(reduce([1,2,3,4,5],
     (a,b) => a + b,
      0));

console.log(
    "array reduced is " + 
    [1,2,3,4].reduce((a,b) => a + b));
    
    var ranges = [[65, 91], [75,100], [85,120],[90,130]];
    