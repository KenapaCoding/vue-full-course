<script setup>
    const props = defineProps({
        modelValue : String
    });

    const emit = defineEmits(["update:modelValue"])

    function handleInput(e){
        emit("update:modelValue", e.target.value)
    }
</script>

<template>
    <input type="text" :value="props.modelValue" @input="handleInput">
</template>