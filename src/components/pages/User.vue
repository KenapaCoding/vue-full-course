<template>

<div>
    <h1>User page</h1>
    <p>ID user : {{ props.id }}</p>
</div>
</template>

<script setup>
    // import { useRoute } from 'vue-router';
    // const route = useRoute()

    // const id = route.params.id

    const props = defineProps(['id']);


</script>