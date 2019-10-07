// setTimeout(() => {console.log("Tick")}, 15000);
const {bigOak, defineRequestType, everywhere}  = require("./crow-tech");
/*
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
    nest.readStorage(name, result => resolve(result));
  });
}

storage(bigOak, "enemies")
.then(value => console.log("Got", value));


// Failure.

new Promise((_, reject) => reject(new Error("Fail")))
  .then(value => console.log("Handler 1"))
  .catch(reason => {
    console.log("Caught failure " + reason);
    return "nothing";
  })
  .then(value => console.log("Handler 2", value));
// → Caught failure Error: Fail
// → Handler 2 nothing
*/

class Timeout extends Error {}

function request(nest, target, type, content) {
   nest.send(target,type, content, () => {console.log("Hello World")} );

   
   return new Promise((resolve, reject) => {
        let done = false;

        function attempt(n) {

                console.log("Note is " +type) ;
                console.log("Datta");
                nest.send(target, type, content, (failed, value) => {

                    done = true;
                    if (failed) reject(failed);
                    else resolve(value);

                });

               
        }

        attempt(1);
        

   });
   
   
}

defineRequestType("note", ()=> {console.log("Note defined")});
 request(bigOak,"Cow Pasture", "note", "Let's caw loudly at 7PM");























