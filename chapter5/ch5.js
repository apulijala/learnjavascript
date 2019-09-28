function repeat(n, action) {

    for(var i = 0; i < n; i++) {
        action(i);
    }
}

repeat(5, console.log);

let labels = [];
repeat(5, j => {
    labels.push(`Unit $(1 + j)`);

});
console.log(labels);