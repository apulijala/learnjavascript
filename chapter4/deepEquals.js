function deepEquals(obj1, obj2) {

    if (obj1 == null && obj2 == null) {
        return true;
    }else if (obj1 == null && obj2 != null) {
        return false
    }else if (obj1 != null && obj2 == null) {
        return false;
    }
    if (typeof obj1 == typeof obj2 && typeof obj1 != "object") {
        return obj1 == obj2;
    }
    console.log(typeof obj1);

    // Now objects. 
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);

    if (keys1.length != keys2.length) {
        return false;
    }else {
        // compare the keys first. 
        for (key in keys1) {
            
        }
    }


    return false;
}

var result = deepEquals(null, null);
console.log(result);
result = deepEquals(2,2);
console.log(result);
result = deepEquals(2,3);
console.log(result);
var firstObject = {x : 2, y: 4};
var secondObject = {x : 2, y: 4}
result = deepEquals(firstObject, secondObject);
console.log( typeof firstObject);
