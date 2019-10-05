/*
let pattern = /(y)/g;
let str = "xyzzy";
let match = pattern.exec(str);
console.log(match);
pattern.lastIndex = 3;
match = pattern.exec(str);
console.log(match);

let quotedText = /'([^']*)'/;
quotedText.lastIndex = 14;
console.log(quotedText.exec("she said 'hello' and is 'hello'"));

console.log("she said 'hello' and is 'hello'".replace(quotedText, "replaced"));

quotedText = /xyz/;
quotedText.exec("This is xyz and xyz");

let digit = /\d/g;
console.log(digit.exec("here it is: 1"));
console.log(digit.exec("here it is: 1"));

console.log(")");
let bregEx = /an/g;
console.log("Banana".match(bregEx));

let myStr = "A string with 3 numbers in it... 42 and 88.";;
let match1;
let digitRegex = new RegExp("\\d+", "g");

while (match1 = digitRegex.exec(myStr)) {
    console.log("Found " + match1[0] + " at index " + match1.index);
}
*/

let secRegex = /\[(.*)\]/;
let str = "[address]"
console.log(str.match(secRegex)[1]);

let element = "hello=world" 
console.log(!/^\s*(;.*)?$/.test(element));