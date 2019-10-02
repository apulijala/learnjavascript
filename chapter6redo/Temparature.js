class Temperature {

    constructor(celsius) {
        this.celsius = celsius;
    }

    get fahrenheit() {
        return  1.8*this.celsius + 32;
    }

    set fahrenheit(value) {
        this.celsius = (value -32)/1.8;
        
    }

}
let temp = new Temperature(22);
console.log(temp.fahrenheit);
// → 71.6
temp.fahrenheit = 86;
console.log(temp.celsius);
// → 30


