
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
result1 = array_to_list([1, 2, 3]);
console.log(result1);


function list_to_array(myObject) {

    function list_to_array_helper(arrayToReturn, objToExtract) {

        if (objToExtract.rest == null) {

            arrayToReturn.push(objToExtract.value);
            return arrayToReturn;
        } else {

            arrayToReturn.push(objToExtract.value);
            return  list_to_array_helper(arrayToReturn, objToExtract.rest );
        }
    }

   return list_to_array_helper([], myObject);
}

var myArray2 = list_to_array(result1);
console.log("Array returned is ")
console.log(myArray2);
