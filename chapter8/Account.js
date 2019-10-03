"use strict";

let accounts = {
    a : 100,
    b: 0,
    c: 20
};
function getAccount(acctName) {
    if (accounts.hasOwnProperty(acctName)) {
        return acctName;
    }else {
        throw new Error("No Such Account : " + acctName);
    }
}

/*
function transferTo(from, money, to) {

    if (account[from] > money) {
        try {
            account[from] -= money;
            to = getAccount(to); 
            account[to] += money;
    
        }catch(error) {
            console.log(error);
            
        }
        finally {
            console.log("In finally");
            account[from] += money;
                
        }
    }
}
*/

function transferTo(from, amount, to) {
    
    if (accounts[from] < amount) return;
    let progress = 0;
    if (accounts[from] > amount) {
        progress = 1;
        accounts[from] -= amount;
        try {
            accounts[getAccount(to)] +=amount;
            progress = 2;
        }finally {
            if (progress == 1) {
                accounts[from] -=amount;  
            }
            console.log("In finally");
        }
    }
}



console.log("Before Transfer");
console.log(accounts);
transferTo('a', 50, 'c');
console.log("After transfer");
console.log(accounts);

/* unsuccessful path.
console.log("Before Transfer");
console.log(account);
transferTo('a', 50, 'd');
console.log("After transfer");
console.log(account);
*/