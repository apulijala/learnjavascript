class Matrix {
    
    constructor(width, height, element = (x,y) => undefined ) {
        this.width = width;
        this.height = height;
        this.content = [];

        // Iniitate matrhix.
        for (let y =0; y < this.height; y++) {
            for (let x =0; x < this.width; x++) {
              // this.content.push(elemnt(x,y));
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

    constuructor(matrix) {
        this.matrix = matrix;
        this.x = 0;
        this.y = 0;
    }

    next() {
        console.log("Before height");
        console.log(this.matrix);
        /*
        if (this.y == this.matrix.height) return {done:true};
        console.log("After height");
        let value = {x : this.x, y: this.y , value : this.matrix.get(x,y)};
        this.x++;
        if (this.x == this.matrix.width) {
                this.y++;
                thix.x = 0;
        }

        return {value : value, done : false}
        */
    }
}




let matrix = new Matrix(2, 2, (x,y) => `value of ${x} and ${y}`);
// console.log(matrix);

Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
}

for (let {x, y, value} of matrix) {
    console.log(x, y, value);
  }

