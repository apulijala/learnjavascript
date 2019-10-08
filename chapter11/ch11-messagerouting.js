const {bigOak, defineRequestType, everywhere} = require("./crow-tech");


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
  
requestType("gossip", (nest, message, source) => {
    if (nest.state.gossip.includes(message)) return;
    console.log(`${nest.name} received gossip '${
                 message}' from ${source}`);
    sendGossip(nest, message, source);
  }) ;


  

