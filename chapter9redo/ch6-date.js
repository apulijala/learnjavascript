console.log(new Date(2009, 11,19).getTime());

function getDateFromString(dateStr) {

    let dateRegex = /(\d{1,2})-(\d{1,2})-(\d{1,4})/;
    let [_, month, day, year] = dateRegex.exec(dateStr);

    console.log(new Date(year, month -1, day));

}

console.log(getDateFromString("1-30-2003"));
console.log("word boundry");
console.log("concatenate");
console.log(/\bcat\b/.test("concatenate"));
console.log("cat");
console.log(/\bcat\b/.test(" cat "));

let animalRegex = /\d+ (pig|chicken|cow)s/;

console.log("145 chickens");
console.log(animalRegex.test("145 chickens"));

console.log("15 pigs");
console.log(animalRegex.test("15 pigs"));