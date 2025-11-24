<template>
    <div>
        <h1 class="container">Hello World !</h1>
        <p>{{ message }}</p>
    </div>

    
</template>

<script setup>
    const props = defineProps({
        message : {
            type: String,
            default : "Hello saja"
        }
    })
</script>

<style scoped>

</style>