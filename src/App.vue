<script setup>
  import { ref, reactive, computed } from 'vue';

  const counter = reactive({count:0})
  function increment(number){
    counter.count = counter.count + number
  }
  const oddoreven = computed(()=>{
    if (counter.count % 2 == 0) return "Angka count genap"
    return "Angka count ganjil"
  })
 
  const message = ref("Hi")
  message.value = "Hello"

  console.log('Hi, Ranggo!');
  function greeting(nama){
    return `Hello, gua ${nama}`
  }

  const link = "https://vuejs.org";

  function getRandomNumber(){
    return Math.random()
  }

  const randomNumber = computed(()=>{
    return Math.random()
  });
</script>

<template>
  <div class="container">
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
</template>

<style scoped>
  .container{
    padding: 20px;
    text-align: center;
  }
</style>
