"use strict";
// class pada javascript merupakan sbuah prototype karena pada dasarnya class 
// pada javascript tidak ada
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// contoh pembuatan class pada typescript
class User {
    constructor(name) {
        this.name = name;
    }
}
exports.User = User;
let user = new User("joni");
console.log(user);
// contoh dua dengan menjadikan construstor sebagai properti
class User2 {
    constructor(age) {
        this.age = age;
    }
}
let user2 = new User2(12);
console.log(user2.age);
