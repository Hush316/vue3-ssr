<script setup>
import useHomeStore from '../store/home.js';

const homeStore =useHomeStore()
console.log(homeStore.count);
</script>
<template>
<div>
  <h2>home</h2>
</div>
</template>
<style scoped>
</style>
