<script setup>

</script>

<template>
  <div class="main-container">
    <h1>Fiskmåsar</h1>
    <div class="artworks">
      <div class="top-row">
        <div class="art-item">
          <img src='../assets/images/himmel-hav.jpg' alt="Skärgårdens serenad">
          <h3>Skärgårdens serenad</h3>
          <p>Akylmålning 40x50 cm</p>
          <p>Semi-abstrakt i tema blåmes</p>
        </div>
      </div>
      <div class="bottom-row">
        <div class="art-item">
          <img src='../assets/images/fiskmas-1.jpg' alt="Kraften i naturens stilla dans">
          <h3>Kraften i naturens stilla dans</h3>
          <p>Akylmålning 40x50 cm</p>
          <p>Semi-abstrakt i tema blåmes</p>
        </div>
        <div class="art-item">
          <img src='../assets/images/fiskmas-2.jpg' alt="Stormens dans">
          <h3>Stormens dans</h3>
          <p>Akylmålning 40x50 cm</p>
          <p>Semi-abstrakt i tema blåmes</p>
        </div>
      </div>
    </div>
    <h1>Strand</h1>
    <div class="artworks">
      <div class="top-row">
        <div class="art-item">
          <img src='../assets/images/fiskmas-ljus.jpg' alt="Ska vi gå och bada">
          <h3>Ska vi gå och bada</h3>
          <p>Akylmålning 40x50 cm</p>
          <p>Semi-abstrakt i tema blåmes</p>
        </div>
      </div>
      <div class="bottom-row">
        <div class="art-item">
          <img src='../assets/images/fiskmas-ljus2.jpg' alt="Två hjärtan, Två horisonter">
          <h3>Två hjärtan, Två horisonter</h3>
          <p>Akylmålning 40x50 cm</p>
          <p>Semi-abstrakt i tema blåmes</p>
        </div>
        <div class="art-item">
          <img src='../assets/images/fiskmas-ljus2.jpg' alt="Två hjärtan, Två horisonter">
          <h3>Två hjärtan, Två horisonter</h3>
          <p>Akylmålning 40x50 cm</p>
          <p>Semi-abstrakt i tema blåmes</p>
        </div>
      </div>
    </div>
    <h1>Blåmesar</h1>
    <div class="artworks">
      <div class="top-row">
        <div class="art-item">
          <img src='../assets/images/Kom-sa-flyger-vi.jpg' alt="Two birds playing">
          <h3>Kom så flyger vi</h3>
          <p>Akylmålning 40x50 cm</p>
          <p>Semi-abstrakt i tema blåmes</p>
        </div>
      </div>
      <div class="bottom-row">
        <div class="art-item">
          <img src='../assets/images/egentid.jpg' alt="A lone bird">
          <h3>Egentid</h3>
          <p>Akylmålning 40x50 cm</p>
          <p>Semi-abstrakt i tema blåmes</p>
        </div>
        <div class="art-item">
          <img src='../assets/images/ska-vi-leka.jpg' alt="Bird asking the other to play">
          <h3>Ska vi leka</h3>
          <p>Akylmålning 40x50 cm</p>
          <p>Semi-abstrakt i tema blåmes</p>
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
  width: 40%;
}

.top-row, .bottom-row {
  display: flex;
  justify-content: center;
}

.art-item {
  margin: 5px;
  text-align: center;
}

.top-row .art-item {
  width: 100%;
  height: auto;
}

.top-row .art-item img {
  width: 100%;
  height: auto;
}


.bottom-row .art-item {
  width: 50%;
  height: auto;
}

.bottom-row .art-item img {
  width: 100%;
  height: auto;

}

.artworks h3 {
  margin-top: 5px;
  font-style: italic;
}


</style>
