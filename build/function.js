"use strict";
// function
function getName() {
    return "apel";
}
function getAge() {
    return 22;
}
function printName() {
    console.log('nama buah :mangga');
}
console.log(getName());
// argumen type padafunction
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(2, 5));
let age;
age = 10;
let Penambahan;
Penambahan = (val1, val2) => {
    return val1 + val2;
};
console.log(Penambahan(3, 3));
// default argumen
function fullName(firstname, lastname = "joni") {
    return firstname + " " + lastname;
}
console.log(fullName('mr'));
// optional parameter
// tidak disarankan untuk digunakan pada return numeric karena parameter
// optional akan mengeluarkan nilai undefined
function getBiodata(nama, alamat) {
    return "alamatnya adalah :" + alamat + " nama :" + nama;
}
console.log(getBiodata("jono", "sleman"));
