/*
const ordinal = require("ordinal");
const {days, months} = require("date-names");
*/
// import ordinal from "ordinal";
import {days, months} from "date-names";

/*
console.log(days[1]);
console.log(months[4]);
console.log(ordinal(25));
console.log(/YYYY/.test("YYYY"));
*/


exports.formatDate = function(date, format) {
    return String(format).replace(/YYYY|M(MMM)?|D(o)?|dddd/g, str => {

        if (str == "YYYY") return date.getFullYear();
        if (str == "M") return date.getMonth();
        if (str == "MMMM") return ordinal(months[date.getMonth()]);
        if (str == "D") return  date.getDate();
        if (str == "Do") return  ordinal(date.getDate());
        if (str == "dddd") return  days[date.getDay()]; 

    });

}
