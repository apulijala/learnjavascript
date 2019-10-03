function numberToString(n, base = 10) {
    let result = "", sign = "";
    if (n < 0) {
        n = -n;
        sign = "-";
    }

    do {
        result = String(n % base) + result;
        // reduce n.
        n = Math.floor(n/base);

    }while  (n > 0);
    return sign + result;
}

console.log(numberToString(21,2));