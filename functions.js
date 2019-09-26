console.log("Mininum of 2 and 4 is " + Math.min(2,4));
console.log("Maximum of 2 and 4 is " + Math.max(2,4));

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question(`What's your name? `, (name) => {
    console.log(`Hi ${name}!`)
    readline.close()
  });
  