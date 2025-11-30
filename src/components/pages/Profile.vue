<template>
    <div>
        <h1>Profile page</h1>
        <button @click="handleClick">Go to home</button>
        <div>
            <p>{{ count }}</p> 
            <button @click="increment">increase</button>
            <button @click="decrement">decrease</button>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useCounter } from '@/composables/useCounter';

    const router = useRouter()


    const {count, increment, decrement} = useCounter()

    function handleClick(){
        router.push('/')
    }
</script>