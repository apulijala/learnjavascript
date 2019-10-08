const {bigOak, defineRequestType, everywhere} = require("./crow-tech");

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

  // Gets triggered when message is sent.



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

  everywhere(nest => {
    nest.state.connections = new Map;
    nest.state.connections.set(nest.name, nest.neighbors);
    broadcastConnections(nest, nest.name);
    console.log(nest.state.connections);
 });





  

