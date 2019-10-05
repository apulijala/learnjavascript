function parseINI(text) {

    let result ={};
    let content = result;

    String(text).split(/\r?\n/).forEach(    
    
    (line) => {

        let match;
        if (match = line.match(/^(\w+)=(.*)$/)) {
            content[match[1]] = match[2];
          }else if (match = line.match(/\[(.*)\]/)) {
           // content.log(match[1]);
          }

    });

    return result;
}

console.log(parseINI(`
name=Vasilis
[address]
city=Tessaloniki
[datta]
narsimha=saraswati
sripada=vallabha
`));
