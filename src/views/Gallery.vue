<script setup>

</script>

<template>
  <div class="main-container">
    <h1>Galleri</h1>
    <div class="artworks">
      <div class="top-row">
      </div>
      <div class="bottom-row">
        <div class="art-item">
          <img src='../assets/images/himmel-hav.jpg' alt="Skärgårdens serenad">
          <p>Skärgårdens serenad</p>
        </div>
        <div class="art-item">
          <img src='../assets/images/fiskmas-1.jpg' alt="Kraften i naturens stilla dans">
          <p>Kraften i naturens stilla dans</p>
        </div>
        <div class="art-item">
          <img src='../assets/images/fiskmas-2.jpg' alt="Stormens dans">
          <p>Stormens dans</p>
        </div>
      </div>
    </div>
    <div class="artworks">
      <div class="top-row">
      </div>
      <div class="bottom-row">
        <div class="art-item">
          <img src='../assets/images/fiskmas-ljus.jpg' alt="Ska vi gå och bada">
          <p>Ska vi gå och bada</p>
        </div>
        <div class="art-item">
          <img src='../assets/images/fiskmas-ljus2.jpg' alt="Två hjärtan, Två horisonter">
          <p>Två hjärtan, Två horisonter</p>
        </div>
        <div class="art-item">
          <img src='../assets/images/fiskmas-ljus2.jpg' alt="Två hjärtan, Två horisonter">
          <p>Två hjärtan, Två horisonter</p>
        </div>
      </div>
    </div>
    <div class="artworks">
      <div class="top-row">
      </div>
      <div class="bottom-row">
        <div class="art-item">
          <img src='../assets/images/Kom-sa-flyger-vi.jpg' alt="Two birds playing">
          <p>Kom så flyger vi</p>
        </div>
        <div class="art-item">
          <img src='../assets/images/egentid.jpg' alt="A lone bird">
          <p>Egentid</p>
        </div>
        <div class="art-item">
          <img src='../assets/images/ska-vi-leka.jpg' alt="Bird asking the other to play">
          <p>Ska vi leka</p>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.artworks {
  width: 50%;
  margin-bottom: 70px;
}

.art-item {
  margin-left: 10px;
  text-align: center;
}

.bottom-row .art-item {
  width: 100%;
  height: 300px;
}


.bottom-row .art-item img {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;

}

p {
  font-size: 16px;
  font-style: italic;
  margin-top: 0;

}

.top-row, .bottom-row {
  display: flex;
  justify-content: center;
}

.top-row .art-item img {
  width: 60%;
  height: auto;
}

.top-row .art-item {
  width: auto;
  height: 100%;
}


/* Enlarge img when clicked */
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10; /* Make sure it's above everything else */
}

.popup-img {
  max-width: 80%;
  max-height: 80%;

}


</style>
