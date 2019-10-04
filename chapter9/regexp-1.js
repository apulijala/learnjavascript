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





