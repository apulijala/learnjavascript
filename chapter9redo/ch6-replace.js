let baRegex = /[ou]/;
console.log("Borobudur".replace(baRegex, "a"));

baRegex = /[ou]/g;
console.log("Borobudur".replace(baRegex, "a"));

let s = "the cia and fbi"; 
s.replace(/cia|fbi/g, str => {
    console.log(str.toUpperCase());
});

console.log("Liskov, Barbara\nMcCarthy, John\nWadler, Philip");
console.log("\n After replacement \n");
console.log("Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(/(\w+), (\w+)/g, "$2, $1"));


