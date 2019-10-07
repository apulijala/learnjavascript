// setTimeout(() => {console.log("Tick")}, 15000);
let {bigOak, defineRequestType} = require("./crow-tech");
bigOak.readStorage("food caches",
        caches => {
            let firstCache = caches[0];           
            bigOak.readStorage(firstCache, info => {
                console.log(info);
            });
        });

bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM", 
        () => {
            console.log("Note Delivered");
        });

defineRequestType("note", (nest, content, source, done) => {
    console.log(`${nest.name} received note: ${content}`);
    done();
});

// Promises.
let fifteen = Promise.resolve(15);
fifteen.then(
    value => console.log(`Got ${value}`)
);

function storage(nest, name) {
    return new Promise(resolve => {
        nest.readStorage(name => result => {
            
        });
}










