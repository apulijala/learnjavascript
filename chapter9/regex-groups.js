let regexQuotedText = /'([^']*)'/;
let regexQuotedTextMatch =
 regexQuotedText.exec("she said 'hello'");
 console.log(" Text that matched " + regexQuotedTextMatch[0]);
 console.log(" Group that matched " + regexQuotedTextMatch[1]);

 let regexBad = /bad(ly)*/;
let regexBadMatch =
 regexBad.exec("badly");

 console.log("String that matched " + regexBadMatch[0]);
 console.log( "Group that matached " + regexBadMatch[1]);

 let regexDigits = /(\d)+/;
 let regexDigitsMatch = regexDigits.exec("123");
 console.log("String that matched " + regexDigitsMatch[0]);
 console.log( "Group that matached " + regexDigitsMatch[1]);



