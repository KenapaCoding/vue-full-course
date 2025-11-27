<script setup>
    import { inject } from 'vue';
    const name = inject('namea', 'guest');
</script>

<template>
    <p>ini dari child B {{ name }}</p>
</template>