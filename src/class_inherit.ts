// inherit pada ts

class Person{
  public name:string

  constructor(name:string, public age:number){
    this.name = name
  }

  setName(name:string):void{
    this.name = name
  }

  getName():string{
    return this.name;
  }
}

class Admin extends Person {
  write:boolean = true
  read:boolean  = true
  phone:string
  private _email:string = ""

  // static property
  static getnameRole: string = "admin"

  // overide construct
  constructor (phone:string, name:string, age:number){
    super(name, age)
    this.phone = phone
  }

  // static method
  static getRoleName() : string{
    return this.getnameRole
  }

  getRole() : {read:boolean , write:boolean}{
    return {
      read: this.read,
      write: this.write
    }
  }

  // setter
  set email(val: string){
    this._email = val
  }

  // getter
  get email() : string{
    return this._email
  }
}

let personAdmin = new Admin("781268361","jono", 12)
console.log(personAdmin.getName())

personAdmin.email = "eraeraer@adasd"
console.log(personAdmin.email)

// pemanggilan static method tanpa harus mengunakan keyword new
console.log(Admin.getnameRole)
console.log(Admin.getRoleName())
