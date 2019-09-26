function zeroPad(numToBePadded, length) {
    var numStr = String(numToBePadded);
    for (var num = numStr.length; num < length; num++) {
        numStr = "0" + numStr;
    }
    return numStr;
}


function printFarmInventory(cows, chickens, pigs) {
    console.log(zeroPad(cows, 3) + " Cows") ;
    console.log(zeroPad(chickens, 3) + " Chickens") ;
    console.log(zeroPad(pigs, 3) + " Pigs") ;
}

printFarmInventory(7, 11, 13)