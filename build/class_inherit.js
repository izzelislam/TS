"use strict";
// inherit pada ts
class Person {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Admin extends Person {
    // overide construct
    constructor(phone, name, age) {
        super(name, age);
        this.write = true;
        this.read = true;
        this._email = "";
        this.phone = phone;
    }
    // static method
    static getRoleName() {
        return this.getnameRole;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    // setter
    set email(val) {
        this._email = val;
    }
    // getter
    get email() {
        return this._email;
    }
}
// static property
Admin.getnameRole = "admin";
let personAdmin = new Admin("781268361", "jono", 12);
console.log(personAdmin.getName());
personAdmin.email = "eraeraer@adasd";
console.log(personAdmin.email);
// pemanggilan static method tanpa harus mengunakan keyword new
console.log(Admin.getnameRole);
console.log(Admin.getRoleName());
