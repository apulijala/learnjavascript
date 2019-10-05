let regex = /eighteen+/;
console.log(regex.test("eighteen++"));
regex = new RegExp("eighteen+");
console.log(regex.test("eighteen++"));
console.log(regex.test("eigteen++"));

regex = /abc/;
console.log(regex.test("abcde"));
console.log(regex.test("abxde"));

console.log(/\d+/.test("in 1992"));

console.log("Testing " + "01-30-2003 15:20");
console.log(/\d+-\d+-\d+ \d+:\d+/.test("01-30-2003 15:20"));
console.log("Testing " + "01-30-2003");
console.log(/\d+-\d+-\d+ \d+:\d+/.test("01-30-2003"));

let notBinary = /[^01]/;
console.log("1100100010100110");
console.log(notBinary.test("1100100010100110"));

console.log("1100100010200110");
console.log(notBinary.test("1100100010200110"));


let oneOrMoreDigits = /'\d+'/;
console.log("'123'");
console.log(oneOrMoreDigits.test("'123'"));
console.log("''");
console.log(oneOrMoreDigits.test("''"));


let zeroOrMoreDigits = /'\d*'/;
console.log("'123'");
console.log(oneOrMoreDigits.test("'123'"));
console.log("''");
console.log(oneOrMoreDigits.test("''"));









