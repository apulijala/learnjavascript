let neighRegex = /neighbo?ur/;
console.log(neighRegex.test("neighbour"));
console.log(neighRegex.test("neighbor"));


console.log("Testing " + "01-30-2003 15:20");
console.log(/\d{1,2}\d{1,2}-\d{1,4} \d{1,2}:\d{1,2}/.test("01-30-2003 15:20"));

let boRegex = /boo+(hoo+)+/i
console.log(boRegex.test("Boohoooohoohooo"));

let result = /\d+/;
console.log(result.exec("one two 100")[0]);
console.log(result.exec("one two 100")["index"]);

let badRegex = /bad(ly)+/;
console.log(badRegex.exec("bad"));
console.log(badRegex.exec("badlyt"));
console.log(badRegex.exec("badlyly"));

