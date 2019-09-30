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
        let index = this.holder.indexOf(value);
        return index > 0;
    }

    delete(value) {
        let index = this.holder.indexOf(value);
        if (index > 0) {
            for (var i = index; i< this.holder.length;i++) {
                    this.holder[i] = this.holder[i+1];
            }
        }
        this.holder.pop();
    }

}

var group = new Group();
group.add(2);
console.log(group);