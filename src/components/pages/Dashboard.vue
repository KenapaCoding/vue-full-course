<template>
    <div>
        <h1>Dashboard page</h1>
        <div>
            <div v-if="loading">Loading . . .</div>
            <div v-else-if="error">Error : {{ error }}</div>
            <pre v-else>{{ data }}</pre>
        </div>
        <router-view/>
    </div>
</template>

<script setup>
    import useFetch from '@/composables/useFetch';

    const {data, error,loading} = useFetch('https://jsonplaceholder.typicode.com/posts')
</script>