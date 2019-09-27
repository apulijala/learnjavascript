
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

result = array_to_list([1, 2, 3]);
console.log(result);

function list_to_array(myObject) {
    if (myObject.rest == null) {
        myArray = [];
        return myArray.push();
    }
}

list_to_array(result);