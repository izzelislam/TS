"use strict";
// abstract class
class Vehicle {
    start() {
        console.log("brumm");
    }
}
class Trux extends Vehicle {
    constructor() {
        super(...arguments);
        this.whels = 4;
    }
}
class Motocycle extends Vehicle {
    constructor() {
        super(...arguments);
        this.whels = 2;
    }
}
let trek = new Trux();
trek.whels;
trek.whels;
