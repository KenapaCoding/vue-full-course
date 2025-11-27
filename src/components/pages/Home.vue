<template>
    Home Page
</template>

<script setup>
import { onMounted, onUnmounted, onBeforeMount,onBeforeUnmount } from 'vue';

onBeforeMount(()=>{
    console.log("on Before Mount")
})
onMounted(()=>{
    console.log("on Mounted")
})
onBeforeUnmount(()=>{
    console.log("on before unmounted")
})
onUnmounted(()=>{
    console.log("on Unmounted")
})
</script>