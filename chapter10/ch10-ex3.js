const {formatDate,helloWorld} = require("./format-date.js");

console.log(formatDate(new Date(2019, 8, 13),
                       "dddd the Do"));

console.log(helloWorld("Andrew"));