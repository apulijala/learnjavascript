/*
let name = "harry";
let s = "Harry is a suspicious character";
let dynamicRegex = new RegExp("\\b(" + name + ")\\b"  , "gi");
console.log(s.replace(dynamicRegex, "__$1__"));

name = "dea+hl[]rd";
// First replace name with escaping special characters.
name = name.replace(/[+\\[]]/g, "\\$&");
s = "This dea+hl[]rd guy is super annoying.";

dynamicRegex = new RegExp("\\b(" + name + ")\\b", "gi");
s.replace(dynamicRegex, "__$&__");

console.log(" word".search(/\S/));

let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyzzy");
console.log(match.index);

*/

let global = /abc/g;
global.lastIndex = 4;
console.log(global.exec("xyz abc"));
// → ["abc"]
let sticky = /abc/y;
console.log(sticky.exec("xyz abc"));
// → null

console.log("Banana".match(/an/g));

