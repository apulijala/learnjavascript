function replaceFunc(str, amount, units) {
    amount = Number(amount) -1;
    if (amount == 0 ) {
        amount  = "No";
    
    }else if (amount == 1) {
        units = units.substr(0, units.length -1);
    }

    return amount + " " + units;
}

let stock = "1 lemon, 2 cabbages, and 101 eggs";
console.log(stock.replace(/(\d+) (\w+)/g, replaceFunc));

function stripComments(commentStr) {

}

console.log(stripComments("1 + /* 2 */3"));
console.log(stripComments("x = 10;// ten!"));
console.log(stripComments("1 /* a */+/* b */ 1"));






