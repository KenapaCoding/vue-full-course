<script setup>
  console.log('Hi, Ranggo!');
  const nama = 'Pato';
</script>

<template>
  <div class="container">
    <h1>Hello, gua {{ nama }}</h1>
    <p>
      Gua sebagai tutor vue pada sesi kali ini
    </p>   
  </div>
</template>

<style scoped>
  .container{
    padding: 20px;
    text-align: center;
  }
</style>
