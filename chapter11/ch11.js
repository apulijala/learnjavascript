const {bigOak, defineRequestType} = require("./crow-tech");
bigOak.readStorage("food caches", (caches) => {
    console.log("Top Level Caches");
    console.log(caches);
    caches.forEach(element => {
        console.log("cache of " + element);
        bigOak.readStorage(element, caches);
        console.log(caches);
    });

});