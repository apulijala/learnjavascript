landscape = function() {
result = "";

flat = function(size) {
    for (var num = 0; num < size; num++) {
        result += "_";
    }

};

mountain = function(size){

    result += "/";
    for (let num = 0; num < size; num++) {
        result += "'";
    }
    result += "\\";
};

flat(4);
mountain(4);
flat(7);
mountain(1);
flat(1);
console.log(result);

var something = 1;
{

    let something = 2;
}

console.log(something);
};

landscape();
