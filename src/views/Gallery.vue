<script setup>

</script>

<template>
  <div class="main-container">
    <h1>Galleri</h1>
    <div class="artworks">
      <div class="bottom-row">
        <div class="art-item">
          <img src='../assets/images/himmel-hav.jpg' alt="Skärgårdens serenad">
        </div>
        <div class="art-item">
          <img src='../assets/images/fiskmas-1.jpg' alt="Kraften i naturens stilla dans">
        </div>
        <div class="art-item">
          <img src='../assets/images/fiskmas-2.jpg' alt="Stormens dans">
        </div>
      </div>
    </div>
    <div class="artworks">
      <div class="bottom-row">
        <div class="art-item">
          <img src='../assets/images/fiskmas-ljus.jpg' alt="Ska vi gå och bada">
        </div>
        <div class="art-item">
          <img src='../assets/images/fiskmas-ljus2.jpg' alt="Två hjärtan, Två horisonter">
        </div>
      </div>
    </div>
    <div class="artworks">
      <div class="bottom-row">
        <div class="art-item">
          <img src='../assets/images/Kom-sa-flyger-vi.jpg' alt="Two birds playing">
        </div>
        <div class="art-item">
          <img src='../assets/images/egentid.jpg' alt="A lone bird">
        </div>
        <div class="art-item">
          <img src='../assets/images/ska-vi-leka.jpg' alt="Bird asking the other to play">
        </div>
      </div>
    </div>
    <h1>Verk till salu</h1>
    <div class="item-container">
      <div class="item-img">
        <img src='../assets/images/himmel-hav.jpg' alt="Skärgårdens serenad">
      </div>
      <div class="item-info">
        <h3>Skärgårdens serenad</h3>
        <p>Akyrlmålning 32x32</p>
        <p>Pris: ---- SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img">
        <img src='../assets/images/fiskmas-1.jpg' alt="Kraften i naturens stilla dans">
      </div>
      <div class="item-info">
        <h3>Kraften i naturens stilla dans</h3>
        <p>Akyrlmålning 32x32</p>
        <p>Pris: ---- SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img">
        <img src='../assets/images/fiskmas-2.jpg' alt="Stormens dans">
      </div>
      <div class="item-info">
        <h3>Stormens dans</h3>
        <p>Akyrlmålning 32x32</p>
        <p>Pris: ---- SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img">
        <img src='../assets/images/fiskmas-ljus.jpg' alt="Ska vi gå och bada">
      </div>
      <div class="item-info">
        <h3>Ska vi gå och bada</h3>
        <p>Akyrlmålning 32x32</p>
        <p>Pris: ---- SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img">
        <img src='../assets/images/fiskmas-ljus2.jpg' alt="Två hjärtan, Två horisonter">
      </div>
      <div class="item-info">
        <h3>Två hjärtan, Två horisonter</h3>
        <p>Akyrlmålning 32x32</p>
        <p>Pris: ---- SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img">
        <img src='../assets/images/Kom-sa-flyger-vi.jpg' alt="Kom så flyger vi">
      </div>
      <div class="item-info">
        <h3>Kom så flyger vi</h3>
        <p>Akyrlmålning 32x32</p>
        <p>Pris: ---- SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img">
        <img src='../assets/images/egentid.jpg' alt="Egentid">
      </div>
      <div class="item-info">
        <h3>Egentid</h3>
        <p>Akyrlmålning 32x32</p>
        <p>Pris: ---- SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img">
        <img src='../assets/images/ska-vi-leka.jpg' alt="Ska vi leka">
      </div>
      <div class="item-info">
        <h3>Ska vi leka</h3>
        <p>Akyrlmålning 32x32</p>
        <p>Pris: ---- SEK</p>
      </div>
    </div>
  </div>


</template>

<style scoped>

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
}

.artworks {
  background: rgb(180, 185, 185);
  width: 40%;
  justify-content: center;
  align-content: center;

}

.art-item {
  justify-content: center;
  align-content: center;
  margin-left: 2px;
  text-align: center;

}

.bottom-row .art-item {
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
}


.bottom-row .art-item img {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;

}

.top-row, .bottom-row {
  display: flex;
  justify-content: center;
  align-content: center;
}

.top-row .art-item img {
  justify-content: center;
  align-content: center;
  width: 100%;
  height: auto;
}


.item-container {
  display: flex;
  width: 60%;
  align-items: center;
  margin-top: 2%;
  gap: 6%;
  margin-left: 20%;
}

.item-img {
  width: 40%;
  height: auto;
  display: flex;
}

.item-img img {
  max-width: 100%;
  max-height: 100%;
  height: auto;
  object-fit: contain;

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
@media only screen and (max-width: 767px) {
  .main-container {
    width: 100%;

  }
  .artworks {
    width: 100%;
  }

  .item-container {
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    margin-left: 0;
  }

}


</style>
