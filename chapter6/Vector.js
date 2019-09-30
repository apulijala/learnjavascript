class Vec {
    constructor(x,y) {
        this.x = x;
        this.y = y;

    }
    
    plus(vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }

    minus(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    }

    get length() {
        return Math.sqrt(this.x* this.x + this.y*this.y);
    }

}