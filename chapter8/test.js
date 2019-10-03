"use strict"
function test(label, body) {
    if (!body()) {
        console.log(`Failed : ${label}`);
    }
}


test ("convert Latin text to uppercase", () => {
    return "hello".toUpperCase() == "HELLO1"
});

test("convert greek text to uppercase", () => {
    return "".toUpperCase() == ""   

});

test("don't convert case-less characters", () => {
    return "    ".toUpperCase() ==  "    "

});
