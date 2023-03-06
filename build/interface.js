"use strict";
class Asus {
    constructor(sku, is_gaming) {
        this.is_gamig = is_gaming;
        this.sku = sku;
    }
    on() {
        console.log("hidup");
    }
    off() {
        console.log("mati");
    }
}
class Acer {
    constructor(sku, is_chrome_book) {
        this.sku = sku;
        this.is_chrome_book = is_chrome_book;
    }
    on() {
        console.log("hidup");
    }
    off() {
        console.log("mati");
    }
}
let rog = new Asus("asus tuf gaming", true);
rog.on;
