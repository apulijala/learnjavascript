let regex = /\d+/;
let string = "one two 100";
let match = regex.exec(string);

console.log("Match starts at " + match.index);
console.log("String that matched " + match);

console.log("In string");
console.log("one two 100".match(/\d+/));

var caseInsensitiveGroup = /boo+(hoo+)(hoo+)+/i;
console.log(caseInsensitiveGroup.exec("Boohoooohoohooo"));

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'"));








