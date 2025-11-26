<template>
    <header>
        <slot name="header"></slot>
    </header>

    <main>
        <slot :user="user"></slot>
        <!-- <button @click="$emit('someEvent', 'test 123')">click</button> -->
        <button @click="handleClick">click</button>
    </main>



    <footer>
        <slot name="footer">Ini Footer</slot>
    </footer>
</template>

<script setup>
    const user = {
        name : "Ranggo",
        age : 26
    }
    const emit = defineEmits(["someEvent"])

    function handleClick(){
        emit('someEvent', 'test 123')
    }
</script>