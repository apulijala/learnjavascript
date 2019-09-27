var complexObject = [{

    events : ["work", "touched tree", "pizza", "running", "television"],
    squirrel : false
},
{
    events : ["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"],
    squirrel: false
},
{
    events : ["weekend", "cycling", "break", "peanuts",  "beer"],
    squirrel: true
}];

console.log("Third squirrel using . operator is  " + complexObject[2].squirrel);
console.log("Third squirrel using square bracket is  " + complexObject[2]["squirrel"]);

console.log("Second squirrel's third event is  " + complexObject[1]["events"] );