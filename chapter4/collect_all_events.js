let journal = [];
function addEntry(events, squirrel) {
    journal.push({events, squirrel});
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "work", "touched tree" , "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts",  "beer"], true);

function call_all_events_of_operator() {

    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                    events.push(event);
            }
        }
    }
    return events;
 
}



function collect_all_evetns() {
    let events = [];
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
var uniqueEventsOf = call_all_events_of_operator();
console.log("Unique events using of opeator " + uniqueEventsOf);
