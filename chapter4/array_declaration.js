let list_of_numbers = [2, 3, 5, 7, 11];
console.log("First Number " + list_of_numbers[0]);
console.log("Third Number " + list_of_numbers[2]);

console.log("length of list of number is " + list_of_numbers["length"]);
console.log("length of list of number using dot notation is " + list_of_numbers.length);

let doh = "Doh";
console.log("value of doh in upper case is " + doh.toUpperCase());
console.log("value of doh in upper case is " + typeof(doh.toUpperCase()));

let sequence = [1,2,3];
sequence.push(4);
console.log(sequence);
sequence.push(5);
console.log(sequence);
sequence.pop();
console.log(sequence);
