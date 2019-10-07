const weekDay = function() {
    
    const names = ["Sunday", "Monday", "Tuesday", "Wednesday",
                   "Thursday", "Friday", "Saturday"];weekDay.number("Sunday")
    return {
        name : function(number) {
            return names[number];
        
        },
        number : function(name) {
            return names.indexOf(name);
        }
    }
}();


console.log(weekDay.name(2));
// console.log(obj.name(2));
