function minimum(a, b) {
    if (a < b ) {
        return a;
    }
    return b;
}

console.log("Minimum of 3 and 5 is " + minimum(3,5));
console.log("Minimum of 10 and 5 is " + minimum(10,5));

function recursiveevenorodd(num) {
    if (num == 0 ) {
        return true;
    }
    if (num == 1) {
        return false;
    }
    return  recursiveevenorodd(num-2);
}

console.log( "11 is even ? " + recursiveevenorodd(11)); 
console.log( "10 is even ? " + recursiveevenorodd(10)); 
console.log(" 1 is even ? " + recursiveevenorodd(1));
console.log(" 0 is even ? " + recursiveevenorodd(0));

var myNum = -1;
console.log("Positive mynum is " + -1*myNum);

function recursiveevenoroddForNegatives (number) {
    function recursiveevenorodd2(num) {
        if (num == 0 ) {
            return true;
        }
        if (num == 1) {
            return false;
        }
        return  recursiveevenorodd2(num-2);
    }
    if (number < 0) {
        return recursiveevenorodd2(-1*number);
    }else {
        return recursiveevenorodd2(number);
    }
    
}

console.log ("recursiveevenoroddForNegatives for 4 is " +  recursiveevenoroddForNegatives(4)) ;
console.log ("recursiveevenoroddForNegatives for -4 is " +  recursiveevenoroddForNegatives(-4)) ;

console.log ("recursiveevenoroddForNegatives for 3 is " +  recursiveevenoroddForNegatives(3)) ;
console.log ("recursiveevenoroddForNegatives for -3 is " +  recursiveevenoroddForNegatives(-3)) ;

function countchars(toTest, charToCount) {

    var count = 0;
    for (var k = 0; k < toTest.length; k++) {
        if (String(toTest).charAt(k) == charToCount) {
            count++;

        }
    }
    return count;
}

var count = countchars("BravoBigmanyBB", "B");
console.log("\n\nTotal count of characters should be 4 is it ? " + count);


