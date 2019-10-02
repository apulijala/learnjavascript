let sym = Symbol("name");
console.log(sym == Symbol("name"));

console.log([1,2].toString());
const stringSymbol = Symbol("toString");
Array.prototype[stringSymbol] = function() {
    return `${this.length} cm of yarn`;
}

console.log([1,2][stringSymbol]());