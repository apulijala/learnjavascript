function parseINI(str) {
    
    let result = {};
    let section = result;
    let keyValRegex = /(\w+)=(\w+)/;
    let match;
    match = "name=Vasilis".match(keyValRegex)
    
    
    str.split(/\r?\n/).forEach(element => {
       
        if (element.match(keyValRegex) ) {
            console.log("In if");
             console.log(element);
        }
       
    });

}
// console.log("name=Vasilis".match(/^(\w+)=(.*)$/));

console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki
[datta]
narsimha=saraswati
sripada=vallabha
`));