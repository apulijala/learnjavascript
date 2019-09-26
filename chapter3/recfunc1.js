function power(base, exponent) {
    if (exponent == 0) {
        return 1;
    }else {
        return base * power(base, exponent-1);
    }
}

var result = power(2,3);
console.log("Result of 2 power 3 is " + result);

function findSolution(target) {

    function find(history, start) {

      //  console.log(history + " " +  start);

        if (start == target) {
            return history;
        }

        if (start > target) {
            return null;
        }
        return find("{" + history + " + 5 " + "}", start + 5) || 
            find("{" + history + " * 3 " + "}", start*  3);
    }
    
   return find("1",1);
}

var myHistory = findSolution(13);
console.log(myHistory);