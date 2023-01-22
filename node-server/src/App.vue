<template>
<div class="app">
  <h2>vue3 app</h2>
  <div>{{ count }}</div>
  <div>{{ double }}</div>
  <button @click="addCounter">++++1</button>

  <div>
    <router-link to="/">home</router-link>
    <router-link to="/about">about</router-link>
  </div>

  <div>
    <h2>路由的占位</h2>
    <router-view></router-view>
  </div>
</div>
</template>

<script setup>
import { computed, ref } from 'vue';
const count =ref(10)
const double=computed(()=>{
  return count.value *2
})

const addCounter=()=>{
  count.value++
}
</script>
<style scoped>
</style>
