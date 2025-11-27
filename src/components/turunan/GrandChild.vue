<script setup>
    import { inject } from 'vue';
    const name = inject('name');
    const greet = inject('greet');
</script>

<template>
   <h1>{{ name }}</h1>
   <button @click="greet">click to greet</button>
</template>