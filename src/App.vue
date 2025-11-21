<script setup>
  import { ref, reactive } from 'vue';

  const counter = reactive({count:0})
  counter.count++

  const message = ref("Hi")
  message.value = "Hello"

  console.log('Hi, Ranggo!');
  const nama = 'Pato';

  const link = "https://vuejs.org";
</script>

<template>
  <div class="container">
    <h1>Hello, gua {{ nama }}</h1>
    <p>
      Gua sebagai tutor vue pada sesi kali ini
    </p>   
  </div>
  <div class="container">
    <p>{{ counter.count }}</p>
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
