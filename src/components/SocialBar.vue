<script setup>

</script>

<template>
  <div class="SocialContainer">
      <a href="https://www.instagram.com/ani_blom" target="_blank" rel="noopener noreferrer">
        <img src="../assets/icons/Instagram_Glyph_Gradient.png" alt="Instagram icon">
      </a>
    <a href="https://www.facebook.com/anita.blom.98622" target="_blank" rel="noopener noreferrer">
      <img src="../assets/icons/Facebook_Logo_Primary.png" alt="Facebook icon">
    </a>
  </div>
</template>


<style scoped>
.SocialContainer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  gap: 10%;
}

.SocialContainer a {
  width: 100%;
}

.SocialContainer img {
  max-width: 100%;
}


</style>
