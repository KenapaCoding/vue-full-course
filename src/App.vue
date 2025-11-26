<script setup>
  import { ref, reactive, computed, watch } from 'vue';
  import HelloWorld from './components/greeting/HelloWorld.vue';
  import Card from './components/slot/Card.vue';
import Layout from './components/layout/Layout.vue';
import MyInput from './components/input/MyInput.vue';
  // const counter = reactive({count:0})
  // function increment(number){
  //   counter.count = counter.count + number
  // }
  // const oddoreven = computed(()=>{
  //   if (counter.count % 2 == 0) return "Angka count genap"
  //   return "Angka count ganjil"
  // })

  // watch(() => counter.count, (newValue,oldValue) => {
  //   console.log(`Nilai count berubah dari ${oldValue} ke ${newValue}`)
  // } )
 
  // const message = ref("Hi")
  // message.value = "Hello"

  // console.log('Hi, Ranggo!');
  // function greeting(nama){
  //   return `Hello, gua ${nama}`
  // }

  // const link = "https://vuejs.org";

  // function getRandomNumber(){
  //   return Math.random()
  // }

  // const randomNumber = computed(()=>{
  //   return Math.random()
  // });

  // const search = ref("test");

  // function onInput(e){
  //   search.value = e.target.value
  // }

//   const isLoggedIn = ref(true);

//   const nilai = ref(85);

//   const todos = ref([
//   {
//     id: 1,
//     text: "Belajar Vue.js",
//     done: false
//   },
//   {
//     id: 2,
//     text: "Mengerjakan project",
//     done: false
//   },
//   {
//     id: 3,
//     text: "Review materi",
//     done: true
//   }
// ]);
// function callback(text){
//   console.log(`button di children di clik user , ${text}`)
// }
  const nama = ref("ranggo")
  const age = ref("26");


</script>

<template>

  <MyInput :value="nama" @change="nama = $event"/>
  <MyInput :value="age" @change="age = $event"/>

  <button @click="()=>console.log(nama,age)">Submit</button>

  <!-- <Layout @some-event="callback">
    <template #header>
      <h1>Judul halaman</h1>
    </template>

    <template #default="{user}">
      <p>Ini main Konten</p>
      <p>Halo Nama gua {{ user.name }}, gua berumur {{ user.age }}</p>
    </template> -->

    <!-- <template #footer>
      <p>2025 All rights reserved</p>
    </template> -->

  <!-- </Layout> -->

  <!-- <HelloWorld message="Hello from parent"/>
  <Card>
    <h3>Ini konten dari parent</h3>
    <p>Bebas isi apa saja</p>
  </Card> -->
  <!-- <div class="container">
    <h1>{{ greeting('Ranggo') }}</h1>
    <p>
      Gua sebagai tutor vue pada sesi kali ini
    </p>   
  </div>
  <div class="container">
    <button @click="increment(1)"> Count is : {{ counter.count }}</button>
    <p>{{ oddoreven }}</p>
    <p>{{ getRandomNumber() }}</p>
    <p>{{ randomNumber }}</p>
    <p>{{ message }}</p>
    <p>{{ message.split('').reverse().join('') }}</p>
    <a :href="link">Kunjungi Vue</a>
  </div>

  <div class="container">
    <input type="text" :value="search" @input="onInput" >
    <input type="text" v-model="search">
    <p>{{ search }}</p>
  </div> -->

  <!-- <div class="container">
    <h1 v-if="isLoggedIn">Selamat Datang !</h1>
    <h1 v-else>Silahkan Login terlebih dahulu</h1>
    <h1 v-show="isLoggedIn">Selamat v-show</h1>
  </div>

  <div class="container">
    <p v-if="nilai>=90">A</p>
    <p v-else-if="nilai>=80">B</p>
    <p v-else-if="nilai>=70">C</p>
    <p v-else>Tidak Lulus</p>
  </div> -->

  <!-- <ul>
    <li v-for="todo in todos" :key="todo.id" class="todo-item" :class="todo.done ? 'done': 'not-done'">
      {{ todo.text }}
    </li>
  </ul> -->

</template>

<style scoped>
  .container{
    padding: 20px;
    text-align: center;
  }

  .todo-item {
  padding: 10px 14px;
  margin-bottom: 8px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-left: 6px solid; /* garis kiri */
}

/* Jika selesai → hijau */
.done {
  border-left-color: #28a745;
}

/* Jika belum selesai → merah */
.not-done {
  border-left-color: #dc3545;
}

</style>
