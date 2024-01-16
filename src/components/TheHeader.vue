<script setup>

</script>

<template>
  <div class="container">
    <img src="../assets/images/header.jpg" alt="Blue and green colors">
    <div class="links">
      <router-link to="/" active-class="active-link">Hem</router-link>
      <router-link to="/gallery" active-class="active-link">Galleri</router-link>
      <router-link to="/order" active-class="active-link">Beställa verk</router-link>
      <router-link to="/blog" active-class="active-link">Blogg</router-link>
      <router-link to="/about" active-class="active-link">Om mig</router-link>
      <router-link to="/contact" active-class="active-link">Kontakt</router-link>
    </div>
    <div>

    </div>
  </div>
</template>

<style scoped>


.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: transparent;
  border-bottom: 2px solid rgba(30, 140, 60, 0.5%);
}

.container img {
  max-width: 100%;
  max-height: 100%;
  height: auto;
  object-fit: cover;
  object-position: bottom;

}

.active-link {
  color: navy;
  text-decoration: underline;
}

.links {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  gap: 30px;
  background-color: rgba(30, 140, 60, 70%);
}

a {
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-family: "Arsenal", sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

@media only screen and (max-width: 600px) {

  .container {
    height: 52%;

  }

  .links {
    flex-direction: row;
    gap: 15px;
    text-align: center;
    padding: 11px;
  }

  a {
    font-size: 16px;
  }
}

</style>
