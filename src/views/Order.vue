<script setup>

</script>

<template>
  <div class="main-container">
    <h2>Verk till salu</h2>


    <div class="item">
      <div class="item-img">
        <img src="/src/assets/images/egentid.png" alt="Egentid">
      </div>
      <div class="item-info">
        <h3>Egentid</h3>
        <p>Pris: 1234 SEK</p>
      </div>
    </div>

    <div class="item">
      <div class="item-img">
        <img src="/src/assets/images/komsaflygervi.png" alt="Kom så flyger vi">
      </div>
      <div class="item-info">
        <h3>Kom så flyger vi</h3>
        <p>Pris: 1234 SEK</p>
      </div>
    </div>

    <div class="item">
      <div class="item-img">
        <img src="/src/assets/images/skavileka.png" alt="Ska vi leka">
      </div>
      <div class="item-info">
        <h3>Ska vi leka</h3>
        <p>Pris: 1234 SEK</p>
      </div>
    </div>

    <div class="item">
      <div class="item-img">
        <img src="/src/assets/images/kolibri.jpg" alt="Kolibri">
      </div>
      <div class="item-info">
        <h3>Ska vi leka</h3>
        <p>Pris: 1234 SEK</p>
      </div>
    </div>

  </div>
</template>

<style scoped>

.main-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;

}

.item {
  display: flex;
  width: 60%;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  gap: 60px;
}

.item-img {
  width: 50%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-img img {
  max-width: 100%;
  max-height: 100%;
  height: auto;
  object-fit: contain;

}


</style>
