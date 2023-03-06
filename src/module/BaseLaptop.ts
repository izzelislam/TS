import ILaptop from "./ILaptop"
import {a, b} from "./Keyboard"


abstract class BaseLaptop<T> implements ILaptop<T>{
  name: string
  type: T
  withNumeric: boolean
  withTourchButton: boolean

  constructor(name:string, type:T, numeric:boolean, touecButton:boolean){
    this.name = name
    this.type = type
    this.withNumeric = numeric
    this.withTourchButton = touecButton
  }

  a() :void {
    console.log(a())
  }

  b() :void {
    console.log(b())
  }

} 

export default BaseLaptop