var day1 = {
    squirrel: false,
    events : ["work", "touched tree pizza", "running"] 
};

console.log(" Squirrel ? " + day1.squirrel);
console.log(" Wolf ? " + day1.wolf);
day1.wolf = true;
console.log("  Wolf ? " + day1.wolf);
console.log("event one : " + day1.events[0]);

let descriptions = {

     work : "Went to Work",
    "touched tree" : "Touched a Tree"
};
console.log("description of work is " + descriptions.work);
console.log("touched tree is " + descriptions["touched tree"]);
// delete day1["wolf"];
console.log("Wolf is " + day1.wolf)

let description = {

    "left" : 1, 
    "right" : 2
};

console.log(description.left + " "  + description.right);
console.log(" left is " + description["left"] + " and right is  "  + description["right"]);
var leftInDescription = "left" in description; 
console.log( "Is left in description ? " + leftInDescription);
delete description["right"];
var rightDescription = "right" in description;
console.log( "Is right in description ? " + rightDescription);




