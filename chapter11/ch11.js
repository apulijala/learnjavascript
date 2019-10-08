const {bigOak, defineRequestType} = require("./crow-tech");

// extracting caches here 

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


console.log("Defining the note type. When will the function get involved. when send is invoked.");
// whata are the values of nest, content, source and done.

defineRequestType("note", (nest, content, source,done) => {
    console.log(`${nest.name} received note: ${content} from ${source}`);
    done();
});

// send note. and verify that lambda for defineRequestType is invoked.
bigOak.send("Cow Pasture", "note", "Let's caw loudly at 7PM",
            (error, response) => console.log(`Note delivered. with error ${error} ${response}` ));


// Execute the code with function using promise.
function storage(nest, name) {

    // I did not understand this. My Understanding is that
    // value => console.log("Got", value); 
    // is resolve mehtod. But resolve is being invoked again
    // inside lambda of reslve. 

    return new Promise(resolve => {
      nest.readStorage(name, result => resolve(result));
    });
  }
  
let newPromise = storage(bigOak, "enemies");
newPromise.then(value => console.log("Got", value));

new Promise((_, reject) => reject( new Error("Fail"))) // new Error("Fail")))
.then(value => console.log("Handler 1"))
  .catch(reason => {
    console.log("Caught failure " + reason);
    return "nothing";
  })
  .then(value => console.log("Handler 2", value));






















