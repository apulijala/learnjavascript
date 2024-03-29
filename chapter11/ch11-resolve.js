const {bigOak, defineRequestType, everywhere} = require("./crow-tech");

class Timeout extends Error {}

function request(nest, target, type, content) {
  return new Promise((resolve, reject) => {
    let done = false;
    function attempt(n) {
      nest.send(target, type, content, (failed, value) => {
        done = true;
        if (failed) reject(failed);
        else {   resolve(value)};
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

  // Book's version
  requestType("ping", () => "pong");

// Function to get nest.
// console.log(bigOak.neighbors);

function availableNeighbors(nest) {
    
    let requests = nest.neighbors.map(neighbor => {
      return request(nest, neighbor, "ping")
        .then(() => true, () => false);
    });
    return Promise.all(requests).then(result => {
        console.log("Result is " + result);
      return nest.neighbors.filter((_, i) => {  
          
        console.log(_ +  " " + i + " " + result[i] );
        return  result[i] 
    }  ) ;
    });
  }

bigOak.neighbors.push("Not Existing");
console.log("All neighbours are " + bigOak.neighbors);

let resultPromise = availableNeighbors(bigOak);
resultPromise.then(
    value => {console.log(value)}

);

everywhere((nest) => {
    nest.state.gossip = []; 
})

requestType("gossip", (nest, message, source) => {
    if (nest.state.gossip.includes(message)) return;
    console.log(`${nest.name} received gossip '${
                 message}' from ${source}`);
    sendGossip(nest, message, source);
  }) ;


function sendGossip(nest, message, exceptFor = null) {
    nest.state.gossip.push(message);
    for (let neighbor of nest.neighbors) {
      if (neighbor == exceptFor) continue;
      request(nest, neighbor, "gossip", message);
    }
  }

  sendGossip(bigOak, "Digambara Digambara Sripada Vallabha Digambara");


  requestType("connections", (nest, {name, neighbors},
    source) => {
let connections = nest.state.connections;
if (JSON.stringify(connections.get(name)) ==


JSON.stringify(neighbors)) return;
connections.set(name, neighbors);
broadcastConnections(nest, name, source);
});

function broadcastConnections(nest, name, exceptFor = null) {
for (let neighbor of nest.neighbors) {
if (neighbor == exceptFor) continue;
request(nest, neighbor, "connections", {
name,
neighbors: nest.state.connections.get(name)
});
}
}





//  requestType("note",  ((nest, content, source, (failue, response) => {} ) ;

/*

requestType("note", (nest, content, source, done ) => {
    console.log(`${nest.name} received note: ${content} from ${source}`);
    // done();
});

let myPromise = request(bigOak, "Cow Pasture", "note", "Let's caw loudly at 7PM");
myPromise.then(
    value => {console.log("Got after request ", value)}

);
*/


