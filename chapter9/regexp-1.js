let eighteenPlus = /eighteen\+/;
console.log(eighteenPlus.test("eighteen+"));
console.log(eighteenPlus.test("ninehteennn"));

let eightPlusRegex = new RegExp("eighteen\+");
console.log(eightPlusRegex.test("eighteen+"));
console.log(new RegExp("[0-9]").test("in 1992"));
console.log(new RegExp("[0-9]").test("should return false"));

var dateRegex = new RegExp("\\d\\d-\\d\\d-\\d\\d\\d\\d \\d\\d:\\d\\d");
console.log("Testing date Regular expression");
console.log(dateRegex.test("01-30-2003 15:20"));
console.log(dateRegex.test("30-jan-2003 15:20"));
dateRegex = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log("Testing date Regular expression without new operator");
console.log(dateRegex.test("01-30-2003 15:20"));
console.log(dateRegex.test("30-jan-2003 15:20"));

console.log("Regex to bind to any number except 0 or 1");
let numRegex = /[^01]/;
console.log(numRegex.test("1100100010200110"));
console.log(numRegex.test("1100100010100110"));
numRegex = new RegExp("[^01]");
console.log("Regex to bind to any number except 0 or 1 with new operator");
console.log(numRegex.test("1100100010200110"));
console.log(numRegex.test("1100100010100110"));
console.log("digit number");
console.log(/'\d+'/.test("'123'"));





