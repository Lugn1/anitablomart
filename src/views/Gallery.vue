<script setup>
import { ref } from 'vue';

const showPopup = ref(false);
const popupImageSrc = ref('');

const openPopup = (src) => {
  console.log('Opening popup with image source:', src);
  showPopup.value = true;
  popupImageSrc.value = src;
  console.log(popupImageSrc.value)
};

const closePopup = () => {
  showPopup.value = false;
};
</script>

<template>
  <div class="main-container">
    <h1>{{$t('Gallery')}}</h1>
    <div class="item-container"  @click="openPopup('src/assets/images/cropped/himmel-hav-cropped.jpg')">
      <div class="item-img">
        <img src='../assets/images/cropped/himmel-hav-cropped.jpg' alt="Skärgårdens serenad">
      </div>
      <div class="item-info" >
        <h3>Skärgårdens serenad</h3>
        <p>{{$t('AcrylicPainting')}} 50x50</p>
        <p>{{$t('Price')}}: 4000 SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img" @click="openPopup('src/assets/images/cropped/fiskmas-1-cropped.jpg')">
        <img src='../assets/images/cropped/fiskmas-1-cropped.jpg' alt="Kraften i naturens stilla dans">
      </div>
      <div class="item-info">
        <h3>Kraften i naturens stilla dans</h3>
        <p>{{$t('AcrylicPainting')}} 45x55</p>
        <p>{{$t('Price')}}: 4000 SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img" @click="openPopup('src/assets/images/cropped/fiskmas-2-cropped.jpg')">
        <img src='../assets/images/cropped/fiskmas-2-cropped.jpg' alt="Stormens dans">
      </div>
      <div class="item-info">
        <h3>Stormens dans</h3>
        <p>{{$t('AcrylicPainting')}} 38x45</p>
        <p>{{$t('Price')}}: 3300 SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img" @click="openPopup('src/assets/images/cropped/fiskmas-ljus-cropped.jpg')">
        <img src='../assets/images/cropped/fiskmas-ljus-cropped.jpg' alt="Ska vi gå och bada">
      </div>
      <div class="item-info">
        <h3>Ska vi gå och bada</h3>
        <p>{{$t('AcrylicPainting')}} 60x80</p>
        <p>{{$t('Price')}}: 5600 SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img" @click="openPopup('src/assets/images/cropped/fiskmas-ljus2-cropped.jpg')">
        <img src='../assets/images/cropped/fiskmas-ljus2-cropped.jpg' alt="Två hjärtan, Två horisonter">
      </div>
      <div class="item-info">
        <h3>Två hjärtan, Två horisonter</h3>
        <p>{{$t('AcrylicPainting')}}</p>
        <p>{{$t('Price')}}: ---- SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img"  @click="openPopup('src/assets/images/cropped/Kom-sa-flyger-vi-cropped.jpg')">
        <img src='../assets/images/cropped/Kom-sa-flyger-vi-cropped.jpg' alt="Kom så flyger vi">
      </div>
      <div class="item-info">
        <h3>Kom så flyger vi</h3>
        <p>{{$t('AcrylicPainting')}} 40x50</p>
        <p>{{$t('Price')}}: 3600 SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img" @click="openPopup('src/assets/images/cropped/egentid-cropped.png')">
        <img src='../assets/images/cropped/egentid-cropped.png' alt="Egentid">
      </div>
      <div class="item-info">
        <h3>Egentid</h3>
        <p>{{$t('AcrylicPainting')}} 50x40</p>
        <p>{{$t('Price')}}: 3600 SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img"  @click="openPopup('src/assets/images/cropped/ska-vi-leka-cropped.jpg')">
        <img src='../assets/images/cropped/ska-vi-leka-cropped.jpg' alt="Ska vi leka">
      </div>
      <div class="item-info">
        <h3>Ska vi leka</h3>
        <p>{{$t('AcrylicPainting')}} 50x40</p>
        <p>{{$t('Price')}}: 3600 SEK</p>
      </div>
    </div>
    <div v-if="showPopup" class="popup" @click="closePopup">
      <img :src="popupImageSrc" alt="Popup Image" class="popup-img" @click.stop />
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

.art-row .art-item {
  width: 100%;
  height: 100%;
  align-content: center;
  justify-content: center;
}


.art-row .art-item img {
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
