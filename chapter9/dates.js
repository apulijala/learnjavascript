let newDate = new Date(2009, 11, 9);
console.log(new Date(2009, 11, 9));
console.log(new Date(2009, 11, 9, 12, 59, 59, 999));

console.log(new Date(2013, 11, 19.).getTime());
console.log(new Date(1387411200000));

// For gaining richard's faith
function getDateFromString(dateString) {
    let dateRegex = /(\d{1,2})-(\d{1,2})-(\d{1,4})/;
    [_, month, day, year] = dateRegex.exec(dateString);
    console.log(month);
    console.log(day);
    console.log(year);
    
}

console.log("get date from string");
console.log( getDateFromString("1-30-2003"));
