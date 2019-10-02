class Matrix {
    constructor(width,height, element = (x,y) => undefined ) {
        this.width = width;
        this.height = height;
        // Populate the matrix.
        this.content = [];

        for (var k = 0; k < this.height; k++) {
            for (var l =0; l < this.width; l++) {
                this.content[k*this.width + l]  = element(l,k);
            }
        }
    }

    set (m,n, value) {
        this.content[n*this.height + m] = value;
    }

    get (o,p)  {
        return this.content[o*this.height + p];
    }

}


let matrix = new Matrix(2,2, (x,y) => `${x} ${y}`);
console.log(matrix);
// console.log(matrix.get(0,0));

class MatrixIterator {
    constructor(matrix) {
        this.matrix = matrix;
        this.x = 0;
        this.y = 0;
    }

    next() {

        if (this.y == this.matrix.height) return {done : true}; 
        
        // extract the value.
        let  value = {x : this.x, y : this.y, value : this.matrix.get(this.x, this.y)};

        this.x++;

        if (this.x == this.width) {
            this.y++;
            this.x = 0;
        }

        return {value : value, done : false};
    }

}

Matrix.prototype[Symbol.iterator] =  function() {
        return new MatrixIterator(this);
}


for (let {x, y, value} of matrix) {
    console.log(`${x} ${y} ${value}` );
}