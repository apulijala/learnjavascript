// Declare a map using Object. 

let names = {
    "Boris" : 29,
    "Liang" : 22,
    "Julia" : 62

};

console.log(`Julia's age is ${names["Julia"]}`);
console.log(`Is Jack's age known? ${"Jack" in names}`);
console.log(`Is toString's age known? ${"toString" in names}`);

console.log(`Is Jack's age known? ${names.hasOwnProperty("Julia")}`);
console.log(`Is toString's age known? ${names.hasOwnProperty("toString")}`);


console.log({x:1}.hasOwnProperty("x"));
console.log({x:1}.hasOwnProperty("toString"));
