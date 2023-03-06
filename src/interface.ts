interface Laptop{
  sku: string;
  on() : void
  off() : void
}

class Asus implements Laptop {
  sku: string;
  is_gamig:boolean

  constructor(sku:string, is_gaming:boolean){
    this.is_gamig = is_gaming
    this.sku = sku
  }

  on(): void {
    console.log("hidup")
  }
  off(): void {
    console.log("mati")
  }
  
}


class Acer implements Laptop{
  sku: string;
  is_chrome_book: boolean;

  constructor (sku: string, is_chrome_book: boolean){
    this.sku = sku
    this.is_chrome_book = is_chrome_book
  }

  on(): void {
    console.log("hidup")
  }
  off(): void {
    console.log("mati")
  }
  
}

let rog = new Asus("asus tuf gaming", true)
rog.on