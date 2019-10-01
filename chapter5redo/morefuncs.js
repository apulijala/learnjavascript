function repeat(n, action) {
    for (i = 0; i < n; i++) {
        action(i);
    }
}

function unless(test, action) {
    if (!test) action();
}

repeat(5, n => {

     unless(n %2 ==1, () => {console.log(n + " is even.")});       
});

["A", "B"].forEach(i => console.log(i));