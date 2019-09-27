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
        for (var j = 0; j < journal[i].events.length; j++) {

            if (!events.includes(journal[i][j])  ) {

            }
            console.log(" events are " + journal[i].events[j]);
        }
    }

}
collect_all_evetns();