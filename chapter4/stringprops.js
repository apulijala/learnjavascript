console.log("coconut".slice(4,7));
console.log("One two three".indexOf("ee"));
var stringToSplit = "Secretarybirds specialize in stomping";
let strArray = stringToSplit.split(" ");
console.log(strArray);
console.log(strArray.join(". "));
console.log("LA".repeat(3));
console.log(String(6).padStart(3,"0"));

function max(...args) {
    let result = -Infinity;
    for (let number of args) {
        if (number > result) {
            result = number;
        }
        
    }
    return result;
}

var result = max(4, 1, 9, -2);
var newNumbers = [4, 1, 9, -2];
console.log("Maximum value is " + result);

max(...newNumbers);

let {name} = {name: "Faraji", age: 23};
console.log(name);