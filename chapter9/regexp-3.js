let regex = /\d+/;
let string = "one two 100";
let match = regex.exec(string);

console.log("Match starts at " + match.index);
console.log("String that matched " + match);
