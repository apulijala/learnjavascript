class Group {

    constructor() {
        this.holder = [];
    }

    add(value) {

        let index = this.holder.indexOf(value);
        if (index == -1) {
            this.holder.push(value);
        }
    }

    has(value) {

        // return this.holder.indexOf(value);
        return this.holder.includes(value);
    }

    /*
    delete(value) {
        let index = this.holder.indexOf(value);
        if (index > 0) {
            for (var i = index; i< this.holder.length;i++) {
                    this.holder[i] = this.holder[i+1];
            }
            this.holder.pop();
        }
    }*/
// delete better version using lambda.
    delete(value) {
        this.holder = this.holder.filter(x => x !== value);
    }

    static from(iterableObject) {
        let newGroupHoulder = new Group();
        for (let value of iterableObject) {
            newGroupHoulder.add(value);
        }
        return newGroupHoulder;
    }
}

class GroupIterator {

    constructor(group) {
        this.group = group;
        this.position = 0;
    }

    next() {
        
        if (this.position >= this.group.holder.length)  return {done : true};
        let value = this.group.holder[this.position];
        
    }
}



/*
var group = new Group();
group.add(2);
group.add(2);
group.add(3);
group.add(4);
console.log(group);
group.delete(5);
console.log(group);

group.delete(3);
console.log(group);

var newGroup = 
Group.from([6,7,7,8,8,9,3,10]);
console.log(newGroup);
*/

var group = Group.from([10, 20]);
console.log(group);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));