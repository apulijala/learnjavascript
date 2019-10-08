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

console.log("Defining the note type. When will the function get involved");
// whata are the values of nest, content, source and done.

defineRequestType("note", (nest, content, source, done) => {
    console.log(`${nest.name} received note: ${content} source : ${source}`);
    done();
});


// send note. and verify that lambda above is invoked.
/*
bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM",
            () => console.log("Note delivered."));

*/






