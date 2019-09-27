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

function reverseArrayInPlace(arrToReverse) {
    for (var i = 0; i < arrToReverse;i++) {

    }
    return arrToReverse;
}

var originalArray = ["hello", "world", "enough"];
console.log("Original Array is " );
console.log(originalArray);
var reversedArray = reverseArrayInPlace(originalArray);
console.log("Reversed array is ");
console.log(reversedArray);

originalArray = ["hello", "world", "enough", "there"];
console.log("Original Array is " );
console.log(originalArray);
reversedArray = reverseArrayInPlace();
console.log("Reversed array is ");
console.log(reversedArray);



// numbers must be an array.
function sum(numbers) {

    console.log(typeof(numbers));
    if (typeof(numbers) != "object") {
        return numbers;
    }

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