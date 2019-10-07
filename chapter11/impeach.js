/*
function handler(val) {
   throw new Error("Unknown request type " );
}

Promise.resolve(handler(13))
.then(response => {console.log("This is success")},
failure => {console.log("This is a failure")});
*/

let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done"
   setTimeout(() => resolve("done"), 1000);
   // setTimeout(() => reject(new Error("Whoops!")), 1000);
  }).then(response => {console.log("This is success " + response)},
  failure => {console.log("This is a failure")});




//,
// failure => {console.log("This is a failure"});
