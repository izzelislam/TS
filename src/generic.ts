//dengan menambahkan <T> akan membuat dynamic type hasil return dan parameter

// generic type
function getLength<T>(val:T){
  return val
}

let panjang_string = getLength("coba dapatkan panjang string").length;
let panjang_angaka = getLength(1234123123) //gak bisa karena untuk angka g bisa hitung panjang nya

console.log(panjang_string)
console.log(panjang_angaka)


// generic class
class List<T>{
  private data: T[]

  constructor(...elements: T[]){
    this.data = elements
  }

  add(element:T) :void{
    this.data.push(element)
  }

  addMultiple(...elements:T[]) :void{
    this.data.push(...elements)
  }

  getAll() :T[]{
    return this.data
  }
}

// dengan satu tipe data
let angka = new List<number>(1, 3, 4)
angka.addMultiple(8, 9)
console.log(angka.getAll())

// mendefinisikan lebih dari satu tipe data
let dinamis = new List<number | string>("tes", 1, "dua", 3)
dinamis.addMultiple("ya", 90)
console.log(dinamis.getAll())