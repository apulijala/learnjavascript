function parseINI(text) {

    let result ={};
    let content = result;

    String(text).split("\r?\n").forEach(
    (line) => {
        
        if (line.match(/\w+=/)) {
             console.log(line);
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
