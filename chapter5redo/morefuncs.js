function repeat(n, action) {
    for (i = 0; i < n; i++) {
        action(i);
    }
}

function unless(test, action) {
    if (!test) action();
}

