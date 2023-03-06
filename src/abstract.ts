// abstract class

abstract class Vehicle{
  abstract whels:number

  start() : void{
    console.log("brumm")
  }
}

class Trux extends Vehicle{
  whels: number = 4
}

class Motocycle extends Vehicle{
  whels: number = 2
}

let trek = new Trux()
trek.whels
trek.whels