
function array_to_list(myArray) {

    if (myArray.length == 1) {

        var lead = myArray.shift();
        var myObject= {};
        myObject.value = lead;
        myObject.rest = null;
        return myObject;

    }else {
        
        var myObject = {};
        myObject.value = myArray.shift();
        myObject.rest = array_to_list(myArray);
        return myObject;
    }
}

var result = array_to_list([1]);
console.log(result);

result1 = array_to_list([1, 2, 3]);
console.log(result1);

function list_to_array(myObject) {

    function list_to_array_helper(arrayToReturn, objToExtract) {
        if (myObject.rest == null) {

            console.log("Array to return");
            arrayToReturn.push(objToExtract.value);
            console.log(arrayToReturn);
            return arrayToReturn;
        }else {
            
            arrayToReturn.push(objToExtract.value);
            console.log("Array to return is ");
            console.log(arrayToReturn);

            return list_to_array(myObject.rest)
        }
    }

   return list_to_array([], myObject);
}

var myArray1 = list_to_array(result);
console.log("My array 1 is " );
console.log(myArray1);

/*
var myArray2 = list_to_array(result1);
console.log("My array 1 is " );
console.log(myArray1);
*/