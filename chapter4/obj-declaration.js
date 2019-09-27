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
console.log("description of work is " + descriptions["work"]);
console.log("touched tree is " + descriptions["touched tree"]);
// delete day1["wolf"];
console.log("Wolf is " + day1.wolf)



