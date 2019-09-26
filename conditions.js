

let number="hello";
number =10;
if (!Number.isNaN(number)) {
    console.log("Why didn't you give me a number?? ");
}else {
    console.log("Your number is squre root of " + number*number);
}

let num=101;
if (num < 10) {
    console.log("Small");
}else if (num < 100) {
    console.log("Medium");
}else {
    console.log("Large");
}


let counter=0;
let result = 1;
while (counter < 10) {
    result = result*2;
    console.log(result);
    counter = counter+1;
}
console.log("counter is " + counter);
console.log("Result is " + result);

let weather = "cold";
switch(weather) {

    case "rainy":
        console.log("Weather is " + weather);
    break;

    case "sunny":
        console.log("Sunny weather and dry!");
    break;

    default:
        console.log("Unknown weather type!");
}

for (var numb=0; numb <= 12; numb= numb+2) {
    console.log("Number is " + numb);
}

console.log("\nDrawing the triangle\n");

for (let num = 1; num < 8; num++) {
    var hashedstr = "";
    for (num1 = 0; num1 < num; num1++ ) {
        hashedstr += "#";
    }
    console.log(hashedstr);
}

