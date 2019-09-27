let object1 = {value : 10};
let object2 = object1;

if (object1 == object2) {
    console.log("object1 and object2 are identical");
}
let object3={value : 10};
if (object2 == object3) {
    console.log("object2 and object3 are identical");
}else {
    console.log("object2 and object3 are not identical");
}

const score = {
    visitors : 0,
    home : 0
};

console.log(score);
// Reassign visitors to be 1
score.visitors = 1;
console.log(score);
/*
score = {
    visitors : 2,
    home : 3
};
*/


