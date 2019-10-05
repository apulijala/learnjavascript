function parseINI(str) {
    
    let result = {};
    let section = result;
    let keyValRegex = /(\w+)=(\w+)/;
    let secRegex = /\[(.*)\]/;
    let match;
    // match = "name=Vasilis".match(keyValRegex);

    str.split(/\r?\n/).forEach(element => {
       
        if (match = element.match(keyValRegex) ) {
            section[match[1]] = match[2];
        }else if (match = element.match(secRegex)) {
              section =result[match[1]] = {}; 
        }else if (!/^\s*(;.*)?$/.test(element)) {
            throw new Error("Line '" + element + "' is not valid.");
        }
       
    });
    return result;
}
// console.log("name=Vasilis".match(/^(\w+)=(.*)$/));

console.log(parseINI(`
name=Vasilis
[address]
(city=Tessaloniki
[datta]
narsimha=saraswati
sripada=vallabha

`));