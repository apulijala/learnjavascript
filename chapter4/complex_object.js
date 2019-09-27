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

console.log("Second squirrel's third event using square brakcet operator is " + 
    complexObject[1]["events"][2] );

console.log("Second squirrel's third event using dot operator is " + 
    complexObject[1].events[2] );

