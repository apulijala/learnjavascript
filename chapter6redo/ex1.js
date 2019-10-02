class Group {
    constructor() {
        this.group = [];
    }

    has(value) {
        return this.group.includes(value);
    }

    delete(value) {
      this.group = this.group.filter((i) => i != value );
    }

    add(value) {
        if (!this.has(value)) {
            this.group.push(value);
        }
    }

    static from(myIterable) {
        let group = new Group();
        for (let val of myIterable) {
            group.add(val);
        }
        return group;
    }
}



let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false