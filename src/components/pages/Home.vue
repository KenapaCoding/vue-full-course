<template>
    <div>
        Home pages
        <div>
            <p ref="box">{{ count }}</p> 
            <button @click="increment">increase</button>
            <button @click="decrement">decrease</button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, onBeforeMount,onBeforeUnmount, onActivated,onDeactivated, ref, onUpdated, onBeforeUpdate } from 'vue';
import { useCounter } from '@/composables/useCounter';

const {box, count, increment, decrement} = useCounter(5,3)

onBeforeMount(()=>{
    console.log("on Before Mount")
})
onMounted(()=>{
    console.log("on Mounted")
})

onBeforeUpdate(()=>{
    console.log("on before update")
})

onUpdated(()=>{
    console.log("on updated")
})


onActivated(()=> {
    console.log("on activate")
})
onDeactivated(()=> {
    console.log("on activate")
})

onBeforeUnmount(()=>{
    console.log("on before unmounted")
})
onUnmounted(()=>{
    console.log("on Unmounted")
});
</script>