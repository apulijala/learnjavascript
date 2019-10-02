class Matrix {
    constructor(width,height, element = (x,y) => undefined ) {
        this.width = width;
        this.height = height;
        // Populate the matrix.
        this.content = [];

        for (var y = 0; y < this.height; y++) {
            for (var x =0; x < this.width; x++) {
                this.content[y*this.width + x]  = element(x,y);
            }
        }
    }

    set (m,n, value) {
        this.content[n*this.height + m] = value;
    }

    get (o,p)  {
        return this.content[p*this.height + o];
    }

}


let matrix = new Matrix(2,2, (x,y) => `value ${x}, ${y}`);
// console.log("Matrix is "); 
// console.log(matrix);
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

        if (this.x == this.matrix.width) {
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

class SymmetricMatrix extends Matrix {
    constructor(size, element = (x,y) => undefined) {
        super(size, size, (x,y) => {
                if (x > y) {
                        return element(y,x);
                }else {
                    return element(x,y);
                }

        });
    }

    set (x,y, value) {
        super.set(x,y, value);
        if (x != y) {
            super.set(y,x, value);
        }
    }

}

let matrix1 = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix1.get(2, 3));
// → 3,2
console.log("Iterating over matrix1");
for ({x,y, value} of matrix1) {
    console.log(x, y, value);
}
console.log(new SymmetricMatrix(2) instanceof Matrix);
console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);

