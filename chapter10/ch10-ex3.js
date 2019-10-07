const {formatDate,helloWorld} = require("./format-date.js");

/*
console.log(formatDate(new Date(2019, 8, 13),
                       "dddd the Do"));
*/

console.log(formatDate(new Date(2019, 8, 13),
                       "dddd the Do YYYY"));                       

// Should print  Friday the 13th                   

// console.log(helloWorld("Andrew"));

// should print Hello World to Andrew
