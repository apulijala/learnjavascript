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
      
        console.log(firstVal);
        // after 1 second signal that the job is done with the result "done"
       setTimeout(() => {resolve("nobody")}, 1000);
        
       // setTimeout(() => reject(new Error("Whoops!")), 1000);
      })
}

let myPromise = doWork("This is the first value");
myPromise.then(anything => {console.log("This is a failure"),
    response => {console.log("This is success " + response)}
      }
  
  );




//,
// failure => {console.log("This is a failure"});
