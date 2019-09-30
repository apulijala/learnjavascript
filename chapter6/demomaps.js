let ages = {

"Boris" : 39,
"Liang" : 22,
"Julia" : 62
};

console.log("Júlia is " + ages["Julia"]);
console.log("Is Jack's age known? " ,  "Jack" in ages);

ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Julia", 62);

console.log("Julia is ", ages.get("Julia"));
console.log("Is Jack's age known?", ages.has("Jack"));
console.log("Is Jack's age known?", ages.has("Jack"));