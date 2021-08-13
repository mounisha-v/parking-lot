
 class Car {
    constructor (NUMBER, COLOR,TYPE) {
        this.NUMBER = NUMBER; // unique property of an instance of car class
        this.COLOR = COLOR;
        this.TYPE=TYPE;

    }

    /**
     *
     *  carA an instance of Car class
     *  carB an instance of Car class
     *  returns true if two Car Objects are equal, false if both are not equal
     */
    isCarEqual (carA, carB) {
        return ((carA.NUMBER.toLowerCase() === carB.NUMBER.toLowerCase())
            && carA.COLOR.toLowerCase() === carB.toLowerCase());
    }
}

module.exports = Car;