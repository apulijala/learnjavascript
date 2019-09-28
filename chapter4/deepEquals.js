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
    
    // Now objects. 
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);
    
    if (keys1.length != keys2.length) {
        return false;
    }else {
        // compare the keys first. 
        for (let key of keys1) {
            if (! key in obj2) {
                return false;
            }
            if (typeof obj1[key] == "object" && typeof obj2[key] == "object") {
                    var deepEqualResult = deepEquals(obj1[key], obj2[key]);
                    if (deepEqualResult == false) {
                            return false;
                }
            }else if (obj1[key] != obj2[key]) {
                    return false;
            }
        }
        
    }
    return true;
}


var result = deepEquals(null, null);
console.log(result);
result = deepEquals(2,2);
console.log(result);
result = deepEquals(2,3);
console.log(result);
var firstObject = {x : 2, y: 4};
var secondObject = {x : 2, y: 4};
console.log(firstObject);
console.log(secondObject);
result = deepEquals(firstObject, secondObject);
console.log(result);
var firstObject1 = {x : 2, y: 3};
var secondObject1 = {x : 2, y: 4};
console.log(firstObject1);
console.log(secondObject1);
var result = deepEquals(firstObject1, secondObject1);
console.log(result);

var firstObject2 = {x : 2, z: 4};
var secondObject2 = {x : 2, y: 4};
console.log(firstObject2);
console.log(secondObject2);
var result = deepEquals(firstObject1, secondObject1);
console.log(result);

var firstObject3= {x : 2, z: {y: 4}};
var secondObject3 = {x : 2, z: {y: 4}};
console.log(firstObject3);
console.log(secondObject3);
 result = deepEquals(firstObject3, secondObject3);
console.log(result);

var firstObject4= {x : 2, z: {y: 4}};
var secondObject4 = {x : 2, z: {y: 5}};
console.log(firstObject4);
console.log(secondObject4);
result = deepEquals(firstObject4, secondObject4);
console.log(result);

var firstObject5= {x : {l : 4, m : {n : 5}}, z: {y: 4}};
var secondObject5 = {x : {l : 4, m : {n : 5}}, z: {y: 4}};;
console.log(firstObject5);
console.log(secondObject5);

result = deepEquals(firstObject5, secondObject5);
console.log(result);

var firstObject6= {x : {l : 4, m : {n : 6}}, z: {y: 3}};
var secondObject6 = {x : {l : 4, m : {n : 5}}, z: {y: 4}};;
console.log(firstObject6);
console.log(secondObject6);

result = deepEquals(firstObject6, secondObject6);
console.log(result);

var firstObject7= {x : {l : 4, m : {n : 6}}, z: {y: 3}};
var secondObject7 = {x : {l : 4, m : 2}, z: {y: 4}};;
console.log(firstObject7);
console.log(secondObject7);
result = deepEquals(firstObject7, secondObject7);
console.log(result);


var firstObject8= {x : {l : 4, m : {n : [4,5,6,8]}}, z: {y: 3}};
var secondObject8 = {x : {l : 4, m : {n : [4,5,6]}}, z: {y: 3}};
console.log(firstObject8);
console.log(secondObject8);
result = deepEquals(firstObject8, secondObject8);
console.log(result);