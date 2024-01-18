<script setup>

</script>

<template>
  <div class="SocialContainer">
      <a href="https://www.instagram.com/ani_blom" target="_blank" rel="noopener noreferrer">
        <img src="../assets/icons/Instagram_Glyph_Gradient.png" alt="Instagram icon">
      </a>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
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
  background-color: transparent;
  margin-right: 8%;
  gap: 12%;
  border-bottom: 2px solid rgba(30, 140, 60, 0.5%);
}

.SocialContainer img {
  width: auto;
  max-height: 30px;
  object-fit: cover;
}

.InstaButton {
  background: linear-gradient(to right, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
  color: white;
  font-family: "Arsenal", sans-serif;
  padding: 5px 10px;
  margin-top: 5px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  outline: none;
  transition: background 0.3s ease;
}

.InstaButton:hover {
  background: linear-gradient(to right, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
  filter: brightness(1.2);
}

</style>
