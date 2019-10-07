let weekDay = function() {
    console.log("In the weekday");
    const names = ["Rama", "Krishna", "Dattatreya"];
    return {
        name : function(x) {
            return names[x];
        }
    }
}

var obj = weekDay();
console.log(obj.name(2));
