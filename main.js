// // // console.log('Hello world')

// // // // string = text
// // // // number/int = 10
// // // // boolean = true / false
// // // // array
// // // // object

// // // const / let

// // // const panjang = 10
// // // const lebar = 10
// // // const luas = (panjang === lebar) || (panjang > 10) && (lebar < 10)

// // // && and
// // // || or

// // // (true && (true && true) || true) && (false || false) && true

// // // (true && (true && true) || true) -> true
// // // &&
// // // (false || false) -> false
// // // &&
// // // true

// // // false





// // // let firstName = 'John'
// // // console.log(firstName)
// // // const age = 31
// // // const isDead = false
// // // const phone = '0837627'
// // // const nik = '24323535'

// // // firstName = 'Jane'

// // // console.log(firstName)
// // // console.log(age)
// // // console.log(isDead)

// // // const panjang = 4
// // // const lebar = 2

// // // const luas = 10

// // // console.log('result',!(panjang === lebar))
// // // console.log((panjang === lebar) && (luas === 10))

// // // (true && true && true && false && true) || true

// // // const lama = 1
// // // const biayaSatuJamPertama = 3000
// // // const biayaSatuJam = 2000

// // // // if(lama >= 1) {
// // // //   console.log(biayaSatuJamPertama)
// // // // } else if (lama > 1){
// // // //   console.log(biayaSatuJamPertama + lama * biayaSatuJam)
// // // // }

// // // // if(lama === 1) {
// // // //   console.log(biayaSatuJamPertama)
// // // // } else if (lama > 1){
// // // //   console.log(biayaSatuJamPertama + lama * biayaSatuJam)
// // // // }

// // // if(lama > 1) {
// // //   console.log(biayaSatuJamPertama + (lama - 1) * biayaSatuJam)
// // // } else if(lama === 1) {
// // //   console.log(biayaSatuJamPertama)
// // // } else {
// // //   console.log('tidak ada biaya')
// // // }

// // // const key = 'minggu 4'

// // // switch(key) {
// // //   case 'minggu 1':
// // //     console.log('minggu 1')
// // //     break;
// // //   case 'minggu 2':
// // //     console.log('minggu 2')
// // //     break;
// // //   default:
// // //     console.log('tidak ada')
// // //     break;
// // // }

// // // const number = 10;
// // // const string = 'arief yusron';
// // // const isDelete = false;

// // // const array = [1, 2, 3, 4];
// // // array[2] = 5
// // // console.log(array[2])

// // // const kelas = ['anton', 'jamal', 'arief', 'yusron']
// // // console.log(kelas)

// // // const sekolah = [['anton', 'jamal'], ['arief', 'yusron']]
// // // console.log('sekolah', sekolah[1][0])

// // // const biodata = {
// // //   name: 'arief yusron',
// // //   age: 26,
// // //   member: [{
// // //     name: 'anton',
// // //     age: 19
// // //   }, {
// // //     name: 'jamal',
// // //     age: 20
// // //   }]
// // // };

// // // console.log('before', biodata)
// // // biodata.member[1].name = 'jamaludin'
// // // console.log(biodata

// // // function sayHello() {
// // //   console.log('Hello')
// // // }

// // // const luasPersegi = (panjang, lebar) => {
// // //   const result = panjang * lebar
// // //   return result;
// // // }

// // // const totalTanah = (luasTanah) => {
// // //   return luasTanah()
// // // }

// // // console.log(totalTanah(() => {
// // //   return 20
// // // }))


// // // let result = 0
// // // const countAlpha = (text, alpha, index = 0)=> {

// // //   if(index <= text.length - 1){
// // //     if(text[index] === alpha) {
// // //       result = result + 1
// // //     }
// // //     countAlpha(text, alpha, index + 1)
// // //   }
// // // }

// // // countAlpha('arief', 'r')

// // // console.log(result)

// // // todolist sederhana
// // // data list = array object
// // // object title, desc
// // // function untuk nambah data ke list tersebut
// // // function untuk menghapus data di list tersebut
// // // function untuk merubah data di list tersebut

// // // for (let i = 0; i < 10; i++) {
// // //   for (let x = 0; x < 10; x++) {
// // //     console.log('loop')
// // //   }
// // // }


// // // let i = 0
// // // while(i < 10) {
// // //   console.log('while', i)
// // //   i++;
// // // }

// // // const member = ['anton', 'rizky', 'yusron']

// // // // for(let i = 0; i < member.length; i++) {
// // // //   console.log(member[i])
// // // // }

// // // member.forEach((item, index) => {
// // //   console.log(item, index)
// // // })

// // // member.map((item, index) => {
// // //   console.log(item, index)
// // // })

// // // const convertData = member.map((item) => {
// // //   return {
// // //     name: item,
// // //     age: 12
// // //   }
// // // })

// // // console.log(member)
// // // console.log(convertData)

// // // const kelas = [
// // //   {
// // //     name: 'anton',
// // //     age: 19
// // //   },
// // //   {
// // //     name: 'rizky',
// // //     age: 20
// // //   }
// // // ]

// // // kelas.forEach((item) => {
// // //   console.log('name: ', item.name)
// // //   console.log('age: ', item.age)
// // //   console.log('------------')
// // // })

// // let todo = []

// // const addTodo = (data) => {
// //   todo = [
// //     data,
// //     ...todo
// //   ]
// // }

// // const deleteTodo = (index) => {
// //   todo = todo.filter((e, i) => i !== index)
// // }

// // addTodo({
// //   title: 'Profile',
// //   desc: 'Bikin fitur Profile'
// // })

// // addTodo({
// //   title: 'HOme',
// //   desc: 'Bikin fitur Home'
// // })

// // addTodo({
// //   title: 'Setting',
// //   desc: 'Bikin fitur Setting'
// // })

// // deleteTodo(1)

// // console.log(todo)

// //DOM
// // element by id
// // element by tag
// // element by class

// // const interval = setInterval(() => {
// //   console.log('interval')
// // }, 1000);

// // setTimeout(() => {
// //   clearInterval(interval)
// // }, 5000)

// // const onClickFirst = () => {
// //   const newElement = document.createElement('div')
// //   newElement.id = "id_baru"
// //   newElement.innerText = "Test"
// //   newElement.style.color = 'red'
// //   first.appendChild(newElement)
// // }

// // const first = document.getElementById('first')
// // first.onclick = onClickFirst
// // // addEventListener('click', onClickFirst)

// // addEventListener('DOMContentLoaded', () => {
  
// // })

// // Form
// const form = document.getElementById('my-form')

// const showTable = (username, password) => {
//   const table = document.getElementById('my-table')
//   table.style.visibility = 'visible'

//   const btnClear = document.getElementById('btn-clear')
//   btnClear.style.visibility = 'visible'

//   const colUsername = document.getElementById('col-username')
//   const colPassword = document.getElementById('col-password')

//   colUsername.innerText = username
//   colPassword.innerText = password
// }

// const data = JSON.parse(localStorage.getItem('data'))


// if(!!data?.username && !!data?.password) {
//   showTable(data.username, data.password)
// }

// form.addEventListener('submit', (event) => {
//   event.preventDefault()

//   const username = event.target.username.value
//   const password = event.target.password.value

//   if(!!username && !!password) {
//     showTable(username, password)

//     const payload = {
//       username: username,
//       password: password
//     }

//     localStorage.setItem('data', JSON.stringify(payload))

//     form.reset()
//   } else {
//     alert('username dan password harus diisi')
//   }
// })

// const btnClear = document.getElementById('btn-clear')

// btnClear.addEventListener('click', () => {
//   const table = document.getElementById('my-table')
//   table.style.visibility = 'hidden'
//   btnClear.style.visibility = 'hidden'

//   localStorage.clear()
// })

// // const listTable = []

// // const table = document.getElementById('my-table')

// // const fragment = document.createDocumentFragment()
// // listTable.forEach((item) => {
// //   const tr = document.createElement('tr')
// //   const td = `
// //       <td>${item.username}</td>
// //       <td>${item.password}</td>
// //   `
// //   tr.innerHTML = td
// //   fragment.appendChild(tr)
// // })

// // table.appendChild(fragment)

// //Reflow & Repaint //display: none



// // const getData = () => {
// //   fetch('https://dummyjson.com/todos')
// //   .then((res) => res.json())
// //   .then((data) => {
// //     console.log(data)
// //     const table = document.getElementById('my-table')
// //     document.getElementById('loading').style.display = 'none'

// //     const fragment = document.createDocumentFragment()
// //     data.todos.forEach((item) => {
// //       const tr = document.createElement('tr')
// //       const td = `
// //         <td>${item.userId}</td>
// //         <td>${item.todo}</td>
// //       `
// //       tr.innerHTML = td
// //       fragment.appendChild(tr)
// //     })

// //     table.appendChild(fragment)
// //   })
// //   .catch((error) => {
// //     console.log('error')
// //   })
// // }
// // getData();


// // const getData = async () => {
// //   try {
// //     const res = await fetch('https://dummyjson.com/todos')
// //     const data = await res.json()

// //     const table = document.getElementById('my-table')
// //     document.getElementById('loading').style.display = 'none'

// //     const fragment = document.createDocumentFragment()
// //     data.todos.forEach((item) => {
// //       const tr = document.createElement('tr')
// //       const td = `
// //         <td>${item.userId}</td>
// //         <td>${item.todo}</td>
// //       `
// //       tr.innerHTML = td
// //       fragment.appendChild(tr)
// //     })

// //     table.appendChild(fragment)
// //   } catch (error) {
// //     console.log('error', error)
// //   }
// // }

// // getData() 

const app = document.getElementById('app');
const root = ReactDOM.createRoot(app);

const Container = (props) => {
  return (
    <div className="container">
      <h1>{props.title}</h1>
      {!!props.desc ? <p>{props.desc}</p> : <h1>kosong</h1> }
      {!!props.desc && <p>{props.desc}</p>}
    </div>
  )
}

const list = [
  {
    title: 'Title 5',
    desc: 'Title 5'
  },
  {
    title: 'Title 6',
    desc: 'Title 7'
  }
]

root.render(
  <>
    <div className="halo">
      <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>Halo</h1>
      <p>Hello world</p>
    </div>

    <Container title="Title 1" desc="Description 1" />
    <Container title="Title 2" desc="Description 2" />
    <Container title="Title 3" desc="Description 3" />
    <Container title="Title 4" />

    {list.map((item, index) => <Container key={index} title={item.title} desc={item.desc} />)}
  </>
)
