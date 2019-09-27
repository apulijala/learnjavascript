let journal = [];
function addEntry(events, squirrel) {

    journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",  "beer"], true);



function collect_all_evetns() {
    let events = [];
    for (var i = 0; i < journal.length; i++) {
        console.log(" outer i is " + i) ;
        for (var i =0; i < journal.events.length; i++) {
                console.log(" i is " + i);
                console.log(journal.events[i]);
        }
    }
}