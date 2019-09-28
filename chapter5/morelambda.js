function unless(test, then) {
    if (!test) {
        then();
    }
}


['A', 'B'].forEach(l => console.log(l));


function filter(array, test) {
    let passed = [];
    for (script of array) {
            if (test(elem)) {
                    passed.push(script);
            }
    }
    return passed;
}

function map(array, transform) {
    let transformed = [];
    for (element of array) {

        transformed.push(transform(element));
    }
    return transformed;
}


map(SCRIPTS, script => script.name);