// console.log('Hello world')

// // string = text
// // number/int = 10
// // boolean = true / false
// // array
// // object

// let firstName = 'John'
// console.log(firstName)
// const age = 31
// const isDead = false
// const phone = '0837627'
// const nik = '24323535'

// firstName = 'Jane'

// console.log(firstName)
// console.log(age)
// console.log(isDead)

// const panjang = 4
// const lebar = 2

// const luas = 10

// console.log('result',!(panjang === lebar))
// console.log((panjang === lebar) && (luas === 10))

// (true && true && true && false && true) || true

// const lama = 1
// const biayaSatuJamPertama = 3000
// const biayaSatuJam = 2000

// // if(lama >= 1) {
// //   console.log(biayaSatuJamPertama)
// // } else if (lama > 1){
// //   console.log(biayaSatuJamPertama + lama * biayaSatuJam)
// // }

// // if(lama === 1) {
// //   console.log(biayaSatuJamPertama)
// // } else if (lama > 1){
// //   console.log(biayaSatuJamPertama + lama * biayaSatuJam)
// // }

// if(lama > 1) {
//   console.log(biayaSatuJamPertama + (lama - 1) * biayaSatuJam)
// } else if(lama === 1) {
//   console.log(biayaSatuJamPertama)
// } else {
//   console.log('tidak ada biaya')
// }

// const key = 'minggu 4'

// switch(key) {
//   case 'minggu 1':
//     console.log('minggu 1')
//     break;
//   case 'minggu 2':
//     console.log('minggu 2')
//     break;
//   default:
//     console.log('tidak ada')
//     break;
// }

// const number = 10;
// const string = 'arief yusron';
// const isDelete = false;

// const array = [1, 2, 3, 4];
// array[2] = 5
// console.log(array[2])

// const kelas = ['anton', 'jamal', 'arief', 'yusron']
// console.log(kelas)

// const sekolah = [['anton', 'jamal'], ['arief', 'yusron']]
// console.log('sekolah', sekolah[1][0])

// const biodata = {
//   name: 'arief yusron',
//   age: 26,
//   member: [{
//     name: 'anton',
//     age: 19
//   }, {
//     name: 'jamal',
//     age: 20
//   }]
// };

// console.log('before', biodata)
// biodata.member[1].name = 'jamaludin'
// console.log(biodata

// function sayHello() {
//   console.log('Hello')
// }

// const luasPersegi = (panjang, lebar) => {
//   const result = panjang * lebar
//   return result;
// }

// const totalTanah = (luasTanah) => {
//   return luasTanah()
// }

// console.log(totalTanah(() => {
//   return 20
// }))


let result = 0
const countAlpha = (text, alpha, index = 0)=> {

  if(index <= text.length - 1){
    if(text[index] === alpha) {
      result = result + 1
    }
    countAlpha(text, alpha, index + 1)
  }
}

countAlpha('arief', 'r')

console.log(result)

// todolist sederhana
// data list = array object
// object title, desc
// function untuk nambah data ke list tersebut
// function untuk menghapus data di list tersebut
// function untuk merubah data di list tersebut