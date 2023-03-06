// function
function getName() :string {
  return "apel";
}

function getAge() : number {
  return 22;
}

function printName() :void{
  console.log('nama buah :mangga')
}

console.log(getName())

// argumen type padafunction

function multiply(num1:number, num2:number) :number {
  return num1 * num2;
}

console.log(multiply(2, 5));


// function as type

// contoh satu
type Age = number
let age:Age
age =10

// contoh dua

type Tambah = (val:number, val2:number) => number
let Penambahan: Tambah

Penambahan = (val1:number, val2:number) :number =>  {
  return val1 + val2
}

console.log(Penambahan(3, 3))


// default argumen
function fullName( firstname:string, lastname:string = "joni") : string {
  return firstname+" "+ lastname
}
console.log(fullName('mr'));

// optional parameter
// tidak disarankan untuk digunakan pada return numeric karena parameter
// optional akan mengeluarkan nilai undefined

function getBiodata(nama:string, alamat?:string) : string {
  return "alamatnya adalah :"+alamat+" nama :"+nama;
}
console.log(getBiodata("jono", "sleman"))

