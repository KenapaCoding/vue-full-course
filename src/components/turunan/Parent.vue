<script setup>
import { ref,provide } from 'vue';
import ChildA from './ChildA.vue';
import ChildB from './ChildB.vue';

const name = ref('Ranggo Pato')

function greeting(){
    alert('Hi bro!')
}

provide('name', name);
provide('greet', greeting);

</script>

<template>
    <div>Ini parent</div>
    <ChildA/>
    <ChildB/>
</template>