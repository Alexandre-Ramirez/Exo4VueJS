<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Météo Ste-Croix</RouterLink> |
      <RouterLink to="/meteo">Météo</RouterLink> |
      <RouterLink to="/about">A propos</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
nav {
  padding: 1rem;
  text-align: center;
  font-size: 1.2rem;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  font-weight: bold;
  color: #42b983;
}
main {
  text-align: center;
  margin-top: 2rem;
}
</style>