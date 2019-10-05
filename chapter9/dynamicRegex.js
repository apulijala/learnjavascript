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