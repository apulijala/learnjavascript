var ranges = [[65, 91], [75,100], [85,120],[90,130]];

var script1 = {
    name : "Script One",
    ranges : ranges
}

var script2 = {
    name : "Script Two",
    ranges : ranges
}

scripts = [script1, script2];

function characterScript(characterCode) {
    for (script of scripts) {
        if (script.ranges.some(
            ([from, to]) => {
                console.log(from + " " + to );
                return characterCode > from && characterScript < to
            }

        )) {
            return script;
        }
    }
    return null;
}

console.log(characterScript(85));


