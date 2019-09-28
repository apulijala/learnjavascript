function deepEquals(obj1, obj2) {

    if (obj1 == null && obj2 == null) {
        return true;
    }else if (obj1 == null && obj2 != null) {
        return false;
    }else if (obj1 != null && obj2 == null) {
        return false;
    }
    if (typeof obj1 == typeof obj2 && typeof obj1 != "object") {
        return obj1 == obj2;
    }
    console.log(typeof obj1);

    // Now objects. 
    keys1 = Object.keys(obj1);

    console.log("first keys");
    console.log(keys1);
    keys2 = Object.keys(obj2);
    console.log("second keys");
    console.log(keys2);
    
    if (keys1.length != keys2.length) {
        return false;
    }else {
        // compare the keys first. 
        console.log("comming here");
        for (let key of keys1) {
            console.log("key is " + key);
            console.log("value1: ");
            console.log(obj1[key]);

            console.log("value2: ");
            console.log(obj2[key]);
            

            if (! key in obj2) {
                return false;
            }
            if (obj1[key] == "object" && obj2[key] == "object") {
                    console.log("should ot be here");
                    var deeepEqualResult = deepEquals(obj1[key1], obj2[key2]);
            }else if (obj1[key] != obj2[key]) {
                    console.log(obj1[key]);
                    console.log(obj2[key]);
                    return false;
            }
        }
        return true;
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
var secondObject = {x : 2, y: 4};

result = deepEquals(firstObject, secondObject);
console.log(result);
var firstObject1 = {x : 2, y: 3};
var secondObject1 = {x : 2, y: 4};
var result = deepEquals(firstObject1, secondObject1);
console.log(result);

var firstObject2 = {x : 2, z: 4};
var secondObject2 = {x : 2, y: 4};
var result = deepEquals(firstObject1, secondObject1);
console.log(result);




