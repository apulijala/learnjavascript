let journal = [];
function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",  "beer"], true);

function collect_all_evetns() {
    let events = [];
    for (let tt of journal) {
        console.log( tt);
    }
 
    for (var i = 0; i < journal.length; i++) {
        for (var j = 0; j < journal[i].events.length; j++) {
            if (!events.includes(journal[i].events[j])  ) {
                    events.push(journal[i].events[j]);
            }
        }
    }
    return events;
}
var uniuqEvents = collect_all_evetns();
console.log("Unique events are  " + uniuqEvents);

