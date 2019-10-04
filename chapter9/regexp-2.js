// Testing regular expressions.
console.log("one or more");
console.log(/'\d+'/.test("'123'"));
console.log(/'\d+'/.test("''"));

console.log("Zero or more matches");
console.log(/'\d*'/.test("'123'"));
console.log(/'\d*'/.test("''"));


var zeroOrOne = new RegExp("neighbo?ur");
console.log("zero or one match");
console.log(zeroOrOne.test("neighbour"));

console.log("Using braces");
var usingBraces = /\d{1,2}-\d{1,2}-\d{1,4} \d{1,2}:\d{1,2}/;
console.log(usingBraces.test("1-30-2003 8:45"));

console.log("case insensitive regex with match groups");

var caseInsensitiveGroup = /boo+(hoo+)+/i;
console.log(caseInsensitiveGroup.test("Boohoooohoohooo"));
console.log(caseInsensitiveGroup.test("boohoohoo"));
// console.log(caseInsensitiveGroup.exec("boohoohoo"));








