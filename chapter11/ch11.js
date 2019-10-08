const {bigOak, defineRequestType} = require("./crow-tech");
bigOak.readStorage("food caches", (caches) => {

    console.log(caches);

});