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
  position: relative;
  background-color: transparent;
  border: 1px solid olive;
}

.container img {
  max-width: 100%;
  height: auto;

}

.links {
  position: relative;
  display: flex;
  justify-content: center;
  top: 80%;
  gap: 10px;

}
</style>
