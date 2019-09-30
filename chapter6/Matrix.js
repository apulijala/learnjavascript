class Matrix {
    constructor(width, height, element = (x,y) => undefined) {

        width = this.width;
        height = this.height;
        this.content = [];

        for (let y =0; y < height;y++) {
            for (let x =0; x < width; x++) {
                content[y*width + x] = element(x,y); 
            }
        }
    }

    get(x,y) {
        return this.content[y*this.width + x];
    }

    set(x,y, value) {
        this.content[y*this.width + x] = value;
    }
}