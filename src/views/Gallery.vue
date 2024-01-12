<script setup>

</script>

<template>
  <div class="main-container">
    <h1>Blåmesar</h1>
    <div class="artworks">
      <div class="top-row">
        <div class="art-item">
          <img src='../assets/images/egentid.png' alt="A lone bird">
          <h3>Egentid</h3>
          <p>Akylmålning 40x50 cm</p>
          <p>Semi-abstrakt i tema blåmes</p>
        </div>
        <div class="art-item">
          <img src='../assets/images/komsaflygervi.png' alt="Two birds playing">
          <h3>Kom så flyger vi</h3>
          <p>Akylmålning 40x50 cm</p>
          <p>Semi-abstrakt i tema blåmes</p>
        </div>
      </div>
      <div class="bottom-row">
        <div class="art-item">
          <img src='../assets/images/skavileka.png' alt="Bird asking the other to play">
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
  width: 50%;
}

.top-row .art-item img {
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
}


.bottom-row .art-item {
  width: 100%;
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
