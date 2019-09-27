var numArray = [0, 1, 2, 3, 4];

// Get elements from 2 onwards
console.log(numArray);
console.log(numArray.splice(2));
console.log(numArray);
console.log(numArray.splice(1,3));

let tasks = ["Swimming", "Jogging", "Running", "Marathon"];
console.log("Before adding Horse racing");
console.log(tasks);
tasks.unshift("Horse Racing");
console.log("After adding Horse racing");
console.log(tasks);
console.log("After removing Horse Racing");
var taskRemoved = tasks.shift();
console.log(tasks);
console.log("Task removeds is " + taskRemoved);
var myCoco = "coconuts";
console.log(myCoco.slice(2,4));
console.log(myCoco);