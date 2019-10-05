let name = "harry";

console.log("Harry is a suspicious harry  character".replace(
    new RegExp("("  + name + ")", "gi") 
    , "_$1_"  ));


console.log("Banana".match(/an/g));


 name = "dea+hl[]rd";
let myStr = "This dea+hl[]rd guy is super annoying."; 

// First let me remove special characters from name.
name = name.replace(/[\[\]\+]/g , "\\$&");
console.log(name);

console.log(myStr.replace(new RegExp("(" + name + ")", "g"), "__$1__" ));

let myRegex = /y/g;
 myRegex.lastIndex = 3;

// console.log(myRegex.exec("xyzzy").index);
console.log(myRegex.exec("xyzzy"));