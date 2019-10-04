let eighteenPlus = /eighteen\+/;
console.log(eighteenPlus.test("eighteen+"));
console.log(eighteenPlus.test("ninehteennn"));

let eightPlusRegex = new RegExp("eighteen\+");
console.log(eightPlusRegex.test("eighteen+"));