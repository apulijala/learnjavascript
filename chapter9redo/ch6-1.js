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
console.log(/\d+/.test("01-30-2003 15:20"));