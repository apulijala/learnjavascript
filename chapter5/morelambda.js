function unless(test, then) {
    if (!test) {
        then();
    }
}


['A', 'B'].forEach(l => console.log(l));