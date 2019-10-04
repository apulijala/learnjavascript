let name = "harry";
let s = "Harry is a suspicious character";
let dynamicRegex = new RegExp( "\\b(" + name + ")\\b"  , "gi");
console.log(s.replace(dynamicRegex, "__$1__"));

let name = "dea+hl[]rd";
// First replace name with escaping special characters.