/*
function handler(val) {
   throw new Error("Unknown request type " );
}

Promise.resolve(handler(13))
.then(response => {console.log("This is success")},
failure => {console.log("This is a failure")});
*/

function doWork(firstVal, resolve, reject) {

    return new Promise(function(resolve, reject) {
        // the function is executed automatically when the promise is constructed
      
        // after 1 second signal that the job is done with the result "done"
       setTimeout(() => {console.log(firstVal)}, 1000);
        resolve("nobody");
       // setTimeout(() => reject(new Error("Whoops!")), 1000);
      })
}

doWork("This is the first value").then(
).then(response => {console.log("This is success " + response)},
      anything => {console.log("This is a failure")}
  
  );





//,
// failure => {console.log("This is a failure"});
