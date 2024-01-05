<script setup>
</script>

<template>
  <div class="container">
    <div class="links">
      <router-link to="/">Hem</router-link>
      <router-link to="/gallery">Galleri</router-link>
      <router-link to="/order">Beställa verk</router-link>
      <router-link to="/blog">Blogg</router-link>
      <router-link to="/about">Om mig</router-link>
      <router-link to="/contact">Kontakt</router-link>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 140px;
  top: 0;
  left: 0;
  position: absolute;
  background-color: olive;
}

.container img {
  max-width: 100%;
  height: auto;
}

.links {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
