const {bigOak, defineRequestType} = require("./crow-tech");

/* extracting caches here 

bigOak.readStorage("food caches", (caches) => {
    console.log("Top Level Caches");
    console.log(caches);
    caches.forEach(element => {
        bigOak.readStorage(element, caches => {
            console.log("cache of " + element);
            console.log(caches);
        });
    });
});
*/

console.log("Defining the note type. When will the function get involved. when send is invoked.");
// whata are the values of nest, content, source and done.

defineRequestType("note", (nest, content, source,done) => {
    console.log(`${nest.name} received note: ${content} from ${source}`);
    done();
});

// send note. and verify that lambda for defineRequestType is invoked.
bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM",
            (error, response) => console.log(`Note delivered. with error ${error} ${response}` ));








