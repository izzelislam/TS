"use strict";
//dengan menambahkan <T> akan membuat dynamic type hasil return dan parameter
// generic type
function getLength(val) {
    return val;
}
let panjang_string = getLength("coba dapatkan panjang string").length;
let panjang_angaka = getLength(1234123123); //gak bisa karena untuk angka g bisa hitung panjang nya
console.log(panjang_string);
console.log(panjang_angaka);
// generic class
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
// dengan satu tipe data
let angka = new List(1, 3, 4);
angka.addMultiple(8, 9);
console.log(angka.getAll());
// mendefinisikan lebih dari satu tipe data
let dinamis = new List("tes", 1, "dua", 3);
dinamis.addMultiple("ya", 90);
console.log(dinamis.getAll());
