let arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(arrays) {
    let combined = [];
    arrays.map((arg) => {  
    arg.forEach(i => combined.push(i));
    });
    return combined;
}
console.log(flatten(arrays));


function flattenWithConcat(arrays) {

    let combined = [];
    arrays.map(arg =>  {
        combined = combined.concat(arg );
        
    });
    return combined;
}
console.log(flattenWithConcat(arrays));

console.log("In reduction");
var finalresult = arrays.reduce((flat, current ) => flat.concat(current), []);
console.log(finalresult);

function every(array, test) {
    // Your code here.
    var result = true;
    for (var item of array) {
        if (!test(item)) {
            return false;
        }
    }  
    return result;
  }
  
  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true


