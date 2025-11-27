<template>
    <div>
        Home pages
        <div>
            <p>{{ count }}</p> 
            <button @click="increase">increase</button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, onBeforeMount,onBeforeUnmount, onActivated,onDeactivated, ref, onUpdated, onBeforeUpdate } from 'vue';

const count = ref(0)

function increase(){
    count.value++
}

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