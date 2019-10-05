let name = "harry";

console.log("Harry is a suspicious harry  character".replace(
    new RegExp("("  + name + ")", "gi") 
    , "_$1_"  ));


console.log("Banana".match(/an/g));


 name = "dea+hl[]rd";
let myStr = "This dea+hl[]rd guy is super annoying."; 

// First let me remove special characters from name.
console.log(name.replace(/[\[\]\+]/g , "\\$&"));