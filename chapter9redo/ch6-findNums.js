let numStr = "A string with 3 numbers in it... 42 and 88.";
let numRegex = /\d+/g;
let match;

while (match = numRegex.exec(numStr)) {

    console.log("Found " + match[0] + " at " + match.index);
}