<script setup lang="ts"></script>

<template>
  <div>
    <h2>About Page</h2>
    <p>This is the About page of the Vue subapp.</p>
    <nav>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </nav>
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
