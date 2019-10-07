// setTimeout(() => {console.log("Tick")}, 15000);
let {bigOak} = require("./crow-tech");
bigOak.readStorage("food caches",
        caches => {
            let firstCache = caches[0];           
            bigOak.readStorage(firstCache, info => {
                console.log(info);
            });
        });
