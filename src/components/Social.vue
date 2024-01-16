<script setup>

</script>

<template>
  <div class="SocialContainer">
    <img src="../assets/icons/Instagram_Glyph_Gradient.png" alt="instagram icon">
      <a href="https://www.instagram.com/ani_blom" target="_blank" rel="noopener noreferrer">
        <button class="InstaButton">Min Instagram</button>
      </a>
  </div>
</template>


<style scoped>
.SocialContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 25%;
  position: absolute;
  top: 25%;
  right: 0%;
  background-color: transparent;
  border-bottom: 2px solid rgba(30, 140, 60, 0.5%);
}

.SocialContainer img {
  max-width: 40%;
  max-height: 40%;
  height: auto;
  object-fit: cover;
  object-position: bottom;


}
.InstaButton {

  background: linear-gradient(to right, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d);
  color: white;
  font-family: "Arsenal", sans-serif;
  padding: 10px 20px;
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