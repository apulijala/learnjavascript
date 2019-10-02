class Matrix {
    
    constructor(width, height, element = (x,y) => undefined ) {
        
        this.width = width;
        this.height = height;
        this.content = [];

        // Iniitate matrhix.
        for (let y =0; y < this.height; y++) {
            for (let x =0; x < this.width; x++) {
              this.content[y*width + x] = element(x,y);
            }
        }
       
    }

    set(x,y) {
        this.content[y*this.width + x] = element(x,y);
    }

    get(x,y) {
        return this.content[y*this.width + x];
    }
    
}


class MatrixIterator {

    constructor(matrix) {
        this.matrix = matrix;
        this.x = 0;
        this.y = 0;
    }

    next() {
        
        if (this.y == this.matrix.height) return {done:true};
        let value = {x : this.x, y: this.y , value : this.matrix.get(this.x,this.y)};
        this.x++;
        if (this.x == this.matrix.width) {
                this.y++;
                this.x = 0;
        }
        return {value : value, done : false}
    }
}




let matrix = new Matrix(2, 2, (x,y) => `value of ${x} ${y}`);
Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
}
Matrix.prototype[Symbol.iterator]();
for ({x,y, value} of matrix) {
    console.log(x, y, value);
}


