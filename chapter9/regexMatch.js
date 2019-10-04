/*
console.log("Barobudur".replace(/[ou]/g, "a"));

let myString = "Liskov, Barbara\nMcCarthy, John\nWadler, Philip";
console.log(myString.replace(/(\w+), (\w+)/, "$2, $1"));""

let s = "the cia and fbi";
s.replace(/\bcia|fbi\b/g, str => console.log(str.toUpperCase()));

*/

let stock = "1 lemon, 2 cabbages, and 101 eggs.";
function minusOne(match, amount, units) {
    /*
    console.log(match);
    console.log(amount);
    console.log(units);
    */

    amount = Number(amount) -1;
    if (amount == 0) {
        amount = "No";
    }else if (amount == 1) {
        units = String(units).substring(0, String(units).length -1);
    }
    return amount + " " + units;
}

console.log(stock.replace(/(\d+) (\w+)/g, minusOne));


