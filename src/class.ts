// class pada javascript merupakan sbuah prototype karena pada dasarnya class 
// pada javascript tidak ada

// contoh pembuatan class pada typescript
export class User {
  public name: string

  constructor(name:string){
    this.name =name
  }
}

let user = new User("joni")
console.log(user)

// contoh dua dengan menjadikan construstor sebagai properti

class User2{
  constructor(public age:number){}
}

let user2 = new User2(12)
console.log(user2.age)

