<script setup>
import Social from "@/components/Social.vue";
</script>

<template>
  <div class="main-container">
  <div class="top-container">
    <div class="signature-container">
    <img src="../assets/signature-placeholder.png" alt="Signature">
    </div>
      <Social></Social>
    <div class="flags">
      <img src="../assets/icons/sweden.png" alt="Swedish flag icon">
      <img src="../assets/icons/united-kingdom.png" alt="UK flag icon">
    </div>
  </div>
  <div class="links-container">
    <div class="link-items">
      <router-link to="/" active-class="active-link">Hem</router-link>
      <router-link to="/gallery" active-class="active-link">Galleri</router-link>
      <router-link to="/order" active-class="active-link">Beställa verk</router-link>
      <router-link to="/blog" active-class="active-link">Blogg</router-link>
      <router-link to="/about" active-class="active-link">Om mig</router-link>
      <router-link to="/contact" active-class="active-link">Kontakt</router-link>
    </div>
  </div>
    </div>
</template>

<style scoped>

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.main-container img {
  max-width: 100%;
  max-height: 100%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-content: center;
  height: auto;
  object-fit: cover;
  object-position: bottom;
}

.top-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin-bottom: 1%;
}

.links-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100.9%;
  left: 0;
  background-color: rgba(30, 140, 60, 70%);
}

.link-items {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4%;
  width: 60%;
  margin: 1%;

}

.link-items a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-family: "Arsenal", sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.flags {
  display: flex;
  width: 6%;
  gap: 15%;
}

.link-items .active-link {
  color: navy;
  text-decoration: underline;
}

.signature-container {
  width: 40%;
  height: auto;
  object-fit: contain;
}



@media only screen and (max-width: 600px) {

  .container {
    height: 52%;

  }

  .links {
    flex-direction: row;
    gap: 15px;
    font-size: 32px;
    text-align: center;
    padding: 11px;
  }
}



</style>
