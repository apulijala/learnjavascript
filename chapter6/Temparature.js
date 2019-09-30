class Temperature  {

    constructor(celsius) {
        this.celsius = celsius;
    }

    get fahrenheit() {
        return 1.8*this.celsius + 32;
    }

    set fahrenheit(value) {
        this.celsius = (value -32)/1.8;
    }

    static fromFahrenheit(value) {
        return new Temperature((value -32)/1.8);
    }

}


let temp = new Temperature(22);
console.log(temp.fahrenheit);

temp.fahrenheit = 86;
console.log(temp.celsius);

temp = Temperature.fromFahrenheit(100);
console.log(temp.celsius);
/*
*/
