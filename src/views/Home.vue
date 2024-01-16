<script setup>

</script>

<template>
  <div class="home-container">
    <section class="intro-section">
      <h1>Välkommen till Anita Blom Art</h1>
      <p>Här kan du utforska mina verk, lära dig om min konstnärliga resa, och få en inblick i de historier som varje penseldrag berättar.</p>
      <router-link to="/gallery">Utforska Galleriet</router-link>
    </section>
    <section class="hero-section">

    </section>

  </div>
</template>

<style scoped>
.home-container {
  text-align: center;
}

.hero-section {
  padding: 20px;
}

.hero-section img {
  max-width: 100%;
  height: auto;
}

.intro-section {
  margin-top: 40px;
}

.router-link {
  display: inline-block;
  margin-top: 10px;
  color: blue;
  text-decoration: none;
}
</style>

