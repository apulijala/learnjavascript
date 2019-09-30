let ages = {
    "Boris" : 39,
    "Liang" : 22,
    "Julia" : 62
};

console.log("Prototype of ages " , Object.getPrototypeOf(ages));
console.log("Julia is ", ages["Julia"]);
console.log("Is Jack's age known?", "Jack" in ages);
console.log("Is toString's age known?", "toString" in ages);


ages = new Map();
ages.set("Boris",39);
ages.set("Liang",22);
ages.set("Julia",62);

console.log("Prototype of Map " , Object.getPrototypeOf(ages));
console.log("Julia is ", ages.get("Julia"));
console.log("Is Jack's age known?", ages.has("Jack"));
console.log("Is Julia's age known?", ages.has("Julia"));
console.log("Is toString's age known?", ages.has("toString"));

console.log({x : 1}.hasOwnProperty("x"));
console.log({x : 1}.hasOwnProperty("toString"));
console.log("x"in {x : 1});






