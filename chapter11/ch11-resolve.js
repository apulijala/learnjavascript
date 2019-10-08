const {bigOak, defineRequestType} = require("./crow-tech");

class Timeout extends Error {}

function request(nest, target, type, content) {
  return new Promise((resolve, reject) => {
    let done = false;
    function attempt(n) {
      nest.send(target, type, content, (failed, value) => {
        done = true;
        console.log("failed is " + failed);
        if (failed) reject(failed);
        else {console.log("value being returned is " + value);   resolve(value)};
      });
      setTimeout(() => {
        if (done) return;
        else if (n < 3) attempt(n + 1);
        else reject(new Timeout("Timed out"));
      }, 250);
    }
    attempt(1);
  });
}

function requestType(name, handler) {
    defineRequestType(name, (nest, content, source,
                             callback) => {
      try {
        Promise.resolve(handler(nest, content, source))
          .then(response => callback(null, response),
                failure => callback(failure));
      } catch (exception) {
        callback(exception);
      }
    });
  }

/*
defineRequestType("note", (nest, content, source, done ) => {
    console.log(`${nest.name} received note: ${content} from ${source}`);
    done();
});
*/

let myPromise = request(bigOak, "Cow Pasture", "note", "Let's caw loudly at 7PM");
myPromise.then(
    value => {console.log("Got after request ", value)}

);
