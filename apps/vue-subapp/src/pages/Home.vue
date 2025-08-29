<script setup lang="ts">
import { ref } from "vue";

const openReact = () => (window as any).$wujie?.props.jump("/micro/react");
const counter = ref(0);
const add = () => {
  counter.value += 1;
};
</script>

<template>
  <div>
    <h2>Home Page</h2>
    <p>Welcome to the Vue subapp Home.</p>
    <button @click="add">{{ counter }}</button>
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </nav>
    <button @click="openReact">open micro react</button>
  </div>
</template>

<style scoped>
nav {
  margin-top: 12px;
}
nav a {
  margin: 0 6px;
}
</style>
