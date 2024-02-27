<script setup>
import {ref} from 'vue';

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
  <section class="main-container">
    <h1>{{ $t('Gallery') }}</h1>
    <div class="art-row">
      <div class="portrait-items">
        <img src="../assets/images/anitablomart_kom_sa_flyger_vi_lets_fly_acrylic.jpg" alt="Kom sa flyger vi">
      </div>
      <div class="landscape-items">
        <img src='../assets/images/anitablomart_egentid_acrylic_painting_bird.jpg' alt="Egentid">
        <img src="../assets/images/anitablomart_ska_vi_leka_acrylic_blames_painting.jpg" alt="Ska vi leka">
      </div>
    </div>

    <div class="art-row">
      <div class="portrait-items" >
        <img src='../assets/images/anitablomart_folj_ditt_inre_ljus_hager.jpg' alt="Egentid">
        <img src='../assets/images/anitablomart_ett_andetag_i_tystnad_painting.jpg' alt="Egentid">
      </div>
      <div class="landscape-items">
        <img src="../assets/images/anitablom_hagrar_herons.jpg" alt="Kom sa flyger vi">

      </div>
    </div>

    <div class="art-row">
      <div class="portrait-items" id="second-row">
        <img src="../assets/images/anitablomart_stormens_dans_seagull_painting.jpg" alt="Kom sa flyger vi">
        <img src="../assets/images/anitablomart_skargardens_serenad_acrylic_painting_seagulls.jpg" alt="Ska vi leka">
        <img id="kraften" src='../assets/images/anitablomart_kraften_i_naturens_stilla_dans_acrylic.jpg' alt="Egentid">
      </div>
    </div>

    <div class="art-row">
      <div class="portrait-items" id="second-row">
        <img src="../assets/images/anitablomart_stormens_dans_seagull_painting.jpg" alt="Kom sa flyger vi">
        <img src="../assets/images/anitablomart_skargardens_serenad_acrylic_painting_seagulls.jpg" alt="Ska vi leka">
        <img id="kraften" src='../assets/images/anitablomart_kraften_i_naturens_stilla_dans_acrylic.jpg' alt="Egentid">
      </div>
    </div>



    <div class="art-row">
      <div class="portrait-items" id="second-row">
        <img src="../assets/images/anitablomart_tva-hjartan_tva-horisonter_seagulls_painting.jpg" alt="Ska vi leka">
        <img src="../assets/images/anitablomart_ska_vi_ga_och_bada_acrylic_seagull_beach.jpg" alt="Kom sa flyger vi">
        <img id="kraften" src='../assets/images/anitablomart_kraften_i_naturens_stilla_dans_acrylic.jpg' alt="Egentid">
      </div>
    </div>

    <div class="item-container"
         @click="openPopup('src/assets/images/anitablomart_skargardens_serenad_acrylic_painting_seagulls.jpg')">
      <div class="item-img">
        <img src='../assets/images/anitablomart_skargardens_serenad_acrylic_painting_seagulls.jpg'
             alt="Skärgårdens serenad">
      </div>
      <div class="item-info">
        <h3>Skärgårdens serenad</h3>
        <p>{{ $t('AcrylicPainting') }} 50x50</p>
        <p>{{ $t('Price') }}: 4000 SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img"
           @click="openPopup('src/assets/images/anitablomart_kraften_i_naturens_stilla_dans_acrylic.jpg')">
        <img src='../assets/images/anitablomart_kraften_i_naturens_stilla_dans_acrylic.jpg'
             alt="Kraften i naturens stilla dans">
      </div>
      <div class="item-info">
        <h3>Kraften i naturens stilla dans</h3>
        <p>{{ $t('AcrylicPainting') }} 45x55</p>
        <p>{{ $t('Price') }}: 4000 SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img" @click="openPopup('src/assets/images/anitablomart_stormens_dans_seagull_painting.jpg')">
        <img src='../assets/images/anitablomart_stormens_dans_seagull_painting.jpg' alt="Stormens dans">
      </div>
      <div class="item-info">
        <h3>Stormens dans</h3>
        <p>{{ $t('AcrylicPainting') }} 38x45</p>
        <p>{{ $t('Price') }}: 3300 SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img"
           @click="openPopup('src/assets/images/anitablomart_ska_vi_ga_och_bada_acrylic_seagull_beach.jpg')">
        <img src='../assets/images/anitablomart_ska_vi_ga_och_bada_acrylic_seagull_beach.jpg'
             alt="Ska vi gå och bada">
      </div>
      <div class="item-info">
        <h3>Ska vi gå och bada</h3>
        <p>{{ $t('AcrylicPainting') }} 60x80</p>
        <p>{{ $t('Price') }}: 5600 SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img" @click="openPopup('src/assets/images/cropped/fiskmas-ljus2-cropped.jpg')">
        <img src='../assets/images/anitablomart_tva-hjartan_tva-horisonter_seagulls_painting.jpg'
             alt="Två hjärtan, Två horisonter">
      </div>
      <div class="item-info">
        <h3>Två hjärtan, Två horisonter</h3>
        <p>{{ $t('AcrylicPainting') }} 60x60</p>
        <p>{{ $t('Price') }}: 4800 SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img"
           @click="openPopup('src/assets/images/anitablomart_kom_sa_flyger_vi_lets_fly_acrylic.jpg')">
        <img src='../assets/images/anitablomart_kom_sa_flyger_vi_lets_fly_acrylic.jpg' alt="Kom så flyger vi">
      </div>
      <div class="item-info">
        <h3>Kom så flyger vi</h3>
        <p>{{ $t('AcrylicPainting') }} 40x50</p>
        <p>{{ $t('Price') }}: 3600 SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img" @click="openPopup('src/assets/images/anitablomart_egentid_acrylic_painting_bird.jpg')">
        <img src='../assets/images/anitablomart_egentid_acrylic_painting_bird.jpg' alt="Egentid">
      </div>
      <div class="item-info">
        <h3>Egentid</h3>
        <p>{{ $t('AcrylicPainting') }} 50x40</p>
        <p>{{ $t('Price') }}: 3600 SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img"
           @click="openPopup('src/assets/images/anitablomart_ska_vi_leka_acrylic_blames_painting.jpg')">
        <img src='../assets/images/anitablomart_ska_vi_leka_acrylic_blames_painting.jpg' alt="Ska vi leka">
      </div>
      <div class="item-info">
        <h3>Ska vi leka</h3>
        <p>{{ $t('AcrylicPainting') }} 50x40</p>
        <p>{{ $t('Price') }}: 3600 SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img"
           @click="openPopup('src/assets/images/anitablomart_liten_florist_acrylic_hare_painting.jpg')">
        <img src='../assets/images/anitablomart_liten_florist_acrylic_hare_painting.jpg'
             alt="Liten florist acrylic painting">
      </div>
      <div class="item-info">
        <h3>Liten florist</h3>
        <p>{{ $t('AcrylicPainting') }} 60x50</p>
        <p>{{ $t('Price') }}: 4400 SEK</p>
      </div>
    </div>
    <div class="item-container">
      <div class="item-img"
           @click="openPopup('src/assets/images/anitablomart_havets_ogonblick_acrylic_seal_ocean.jpg')">
        <img src='../assets/images/anitablomart_havets_ogonblick_acrylic_seal_ocean.jpg'
             alt="Havets ögonblick painting">
      </div>
      <div class="item-info">
        <h3>Havets ögonblick</h3>
        <p>{{ $t('AcrylicPainting') }} 30x40</p>
        <p>{{ $t('Price') }}: 2100 SEK</p>
      </div>
    </div>
    <div v-if="showPopup" class="popup" @click="closePopup">
      <img :src="popupImageSrc" alt="Popup Image" class="popup-img" @click.stop/>
    </div>

  </section>

</template>

<style scoped>

.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.art-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 1%;
  width: 60%;
  gap: 8px;
}


.art-row img {
  max-width: 100%;
  object-fit: contain;
  ;
}

#second-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  width: 70%;
}

.portrait-items {
  width: 40%;
  height: auto;
  display: flex;

  img {
    width: 100%;
    height: auto;
  }
}

.landscape-items {
  width: 30%;
  height: auto;
  gap: 1%;

  img {
    width: 100%;
    height: auto;
  }
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

  .item-container {
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
    margin-left: 1%;
  }

}


</style>
