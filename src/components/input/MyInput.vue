<script setup>
    const props = defineProps({
        value : String
    });

    const emit = defineEmits(["change"])

    function handleInput(e){
        emit("change", e.target.value)
    }
</script>

<template>
    <input type="text" :value="props.value" @input="handleInput">
</template>