let journal = [];
function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",  "beer"], true);


let jsonString = JSON.stringify(journal);
// console.log("Json Stringfied is ");
// console.log(jsonString);

// conver the jsonString to jsonObject and print the second set of events.
var myJsonObject = 
    JSON.parse(jsonString);
console.log("squirrel is ");
console.log(myJsonObject[2].squirrel);
console.log(" Events are ");
console.log(myJsonObject[2].events);
