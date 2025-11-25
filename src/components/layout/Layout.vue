<template>
    <header>
        <slot name="header"></slot>
    </header>

    <main>
        <slot :user="user"></slot>
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
</script>