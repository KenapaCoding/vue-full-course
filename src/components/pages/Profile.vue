<template>
    <div>
        <h1>Profile page</h1>
        <button @click="handleClick">Go to home</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

    const router = useRouter()

    function handleClick(){
        router.push('/')
    }
</script>