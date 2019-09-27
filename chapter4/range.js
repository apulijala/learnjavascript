function range(low, high, step) {
    let numbers = [];
    if (step == undefined) {
        step = 1;
    }
    for (k = low; k <= high; k = k + step) {
        numbers.push(k);
    }   
    return numbers;
}

// numbers must be an array.
function sum(numbers) {


    let sum =  0;
    for (var k = 0; k < numbers.length; k++) {
        sum += numbers[k];
    }

    return sum;
}

let numArray = range(1,10);
console.log("Number array is " + numArray);

let sumResult = sum(numArray);
console.log("Sum of numbers is " + sumResult);