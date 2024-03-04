<script setup>
import {ref} from 'vue';

// Importing images
import komSaFlygerViImg from '../assets/images/anitablomart_kom_sa_flyger_vi_lets_fly_acrylic.jpg';
import egentidImg from '../assets/images/anitablomart_egentid_acrylic_painting_bird.jpg';
import skaViLekaImg from '../assets/images/anitablomart_ska_vi_leka_acrylic_blames_painting.jpg';
import foljDittInreLjusImg from '../assets/images/anitablomart_folj_ditt_inre_ljus_hager.jpg';
import ettAndetagITystnadImg from '../assets/images/anitablomart_ett_andetag_i_tystnad_painting.jpg';
import havetsOgonblickImg from '../assets/images/anitablomart_havets_ogonblick_acrylic_seal_ocean.jpg';
import litenFloristImg from '../assets/images/anitablomart_liten_florist_acrylic_hare_painting.jpg';
import skaViGaOchBadaImg from '../assets/images/anitablomart_ska_vi_ga_och_bada_acrylic_seagull_beach.jpg';
import tvaHjartanTvaHorisonterImg from '../assets/images/anitablomart_tva-hjartan_tva-horisonter_seagulls_painting.jpg';
import stormensDansImg from '../assets/images/anitablomart_stormens_dans_seagull_painting.jpg';
import kraftenINaturensStillaDansImg from '../assets/images/anitablomart_kraften_i_naturens_stilla_dans_acrylic.jpg';
import skargardensSerenadImg from '../assets/images/anitablomart_skargardens_serenad_acrylic_painting_seagulls.jpg';
import fridensSkimmerImg from '../assets/images/anitablom_fridens_skimmer_herons.jpg';
import kolibriImg from '../assets/images/anitablomart_kolibri_hummingbird.jpg';

const showPopup = ref(false);
const popupImageSrc = ref('');

const openPopup = (src, event) => {
  event.preventDefault();
  showPopup.value = true;
  popupImageSrc.value = src;
};

const closePopup = () => {
  showPopup.value = false;
};
</script>


<template>
  <section class="main-container">
    <h1>{{ $t('Gallery') }}</h1>
    <section class="gallery-rows">

      <div class="art-row">
        <div class="art-row-item">
          <img @click="openPopup(komSaFlygerViImg, $event)" :src="komSaFlygerViImg"
               alt='"Kom så flyger vi" acrylic painting depicting blue tit bird flying by Anita Blom'>
        </div>
        <div class="art-row-item">
          <img @click="openPopup(egentidImg, $event)" :src="egentidImg"
               alt='"Egentid" acrylic painting showcasing a blue tit tranquil moment in nature by Anita Blom'>
        </div>
        <div class="art-row-item">
          <img @click="openPopup(skaViLekaImg, $event)" :src="skaViLekaImg"
               alt='"Ska vi leka" acrylic painting of playful blue tit birds in a forest by Anita Blom'>
        </div>
      </div>

      <div class="art-row">
        <div class="art-row-item">
          <img @click="openPopup(foljDittInreLjusImg, $event)" :src="foljDittInreLjusImg"
               alt='"Följ ditt inre ljus" acrylic painting illustrating a heron looking towards a light by Anita Blom'>
        </div>
        <div class="art-row-item">
          <img @click="openPopup(ettAndetagITystnadImg, $event)" :src="ettAndetagITystnadImg"
               alt='"Ett andetag i tystnad" acrylic painting capturing a moment of silence and reflection by Anita Blom'>
        </div>
        <div class="art-row-item">
          <img @click="openPopup(fridensSkimmerImg, $event)" :src="fridensSkimmerImg"
               alt='"Fridens Skimmer" acrylic painting capturing a peaceful moment of herons by Anita Blom'>
        </div>
      </div>

      <div class="art-row">
        <div class="art-row-item">
          <img @click="openPopup(stormensDansImg, $event)" :src="stormensDansImg"
               alt='"Stormens dans" acrylic painting capturing the dynamic energy of a storm by Anita Blom'>
        </div>
        <div class="art-row-item">
          <img @click="openPopup(kraftenINaturensStillaDansImg, $event)" :src="kraftenINaturensStillaDansImg"
               alt='"Kraften i naturens stilla dans" acrylic painting illustrating the peaceful movement in nature by Anita Blom'>
        </div>
        <div class="art-row-item">
          <img @click="openPopup(skargardensSerenadImg, $event)" :src="skargardensSerenadImg"
               alt='"Skärgårdens serenad" acrylic painting of a serene archipelago landscape by Anita Blom'>
        </div>
      </div>

      <div class="art-row">
        <div class="art-row-item">
          <img @click="openPopup(skaViGaOchBadaImg, $event)" :src="skaViGaOchBadaImg"
               alt='"Ska vi gå och bada" acrylic painting of seagulls at the beach by Anita Blom'>
        </div>
        <div class="art-row-item">
          <img @click="openPopup(tvaHjartanTvaHorisonterImg, $event)" :src="tvaHjartanTvaHorisonterImg"
               alt='"Två hjärtan, två horisonter" acrylic painting representing love and distant horizons by Anita Blom'>
        </div>
      </div>

      <div class="art-row">
        <div class="art-row-item">
          <img @click="openPopup(havetsOgonblickImg, $event)" :src="havetsOgonblickImg"
               alt='"Havets ögonblick" acrylic painting of a seal swimming in the ocean by Anita Blom'>
        </div>
      </div>

      <div class="art-row">
        <div class="art-row-item">
          <img @click="openPopup(litenFloristImg, $event)" :src="litenFloristImg"
               alt='"Liten florist" acrylic painting depicting a young hare arranging flowers by Anita Blom'>
        </div>
      </div>
    </section>


    <div class="item-container" @click="openPopup(komSaFlygerViImg, $event)">
      <div class="item-img">
        <img :src="komSaFlygerViImg" alt='"Kom så flyger vi" acrylic painting depicting blue tit bird flying by Anita Blom'>
      </div>
      <div class="item-info">
        <h3>Kom så flyger vi</h3>
        <p>{{ $t('AcrylicPainting') }} 40x50</p>
        <p>{{ $t('Price') }}: 3600 SEK</p>
      </div>
    </div>
    <div class="item-container" @click="openPopup(egentidImg, $event)">
      <div class="item-img">
        <img :src="egentidImg"
             alt='"Egentid" acrylic painting showcasing a tranquil moment in nature by Anita Blom'>
      </div>
      <div class="item-info">
        <h3>Egentid</h3>
        <p>{{ $t('AcrylicPainting') }} 50x40</p>
        <p>{{ $t('Price') }}: 3600 SEK</p>
      </div>
    </div>
    <div class="item-container" @click="openPopup(skaViLekaImg, $event)">
      <div class="item-img">
        <img :src="skaViLekaImg"
             alt='"Ska vi leka" acrylic painting of playful animals in a forest by Anita Blom'>
      </div>
      <div class="item-info">
        <h3>Ska vi leka</h3>
        <p>{{ $t('AcrylicPainting') }} 50x40</p>
        <p>{{ $t('Price') }}: 3600 SEK</p>
      </div>
    </div>
    <div class="item-container" @click="openPopup(foljDittInreLjusImg, $event)">
      <div class="item-img">
        <img :src="foljDittInreLjusImg"
             alt='"Följ ditt inre ljus" acrylic painting illustrating a person walking towards the light by Anita Blom'>
      </div>
      <div class="item-info">
        <h3>Följ ditt inre ljus</h3>
        <p>{{ $t('AcrylicPainting') }} 45x55</p>
        <p>{{ $t('Price') }}: 4000 SEK</p>
      </div>
    </div>
    <div class="item-container" @click="openPopup(ettAndetagITystnadImg, $event)">
      <div class="item-img">
        <img :src="ettAndetagITystnadImg"
             alt='"Ett andetag i tystnad" acrylic painting capturing a moment of silence and reflection by Anita Blom'>
      </div>
      <div class="item-info">
        <h3>Ett andetag i tystnad</h3>
        <p>{{ $t('AcrylicPainting') }} 55x65</p>
        <p>{{ $t('Price') }}: 4500 SEK</p>
      </div>
    </div>
    <div class="item-container" @click="openPopup(havetsOgonblickImg, $event)">
      <div class="item-img">
        <img :src="havetsOgonblickImg"
             alt='"Havets ögonblick" acrylic painting of a seal swimming in the ocean by Anita Blom'>
      </div>
      <div class="item-info">
        <h3>Havets ögonblick</h3>
        <p>{{ $t('AcrylicPainting') }} 30x40</p>
        <p>{{ $t('Price') }}: 2100 SEK</p>
      </div>
    </div>
    <div class="item-container" @click="openPopup(litenFloristImg, $event)">
      <div class="item-img">
        <img :src="litenFloristImg"
             alt='"Liten florist" acrylic painting depicting a young hare arranging flowers by Anita Blom'>
      </div>
      <div class="item-info">
        <h3>Liten florist</h3>
        <p>{{ $t('AcrylicPainting') }} 60x50</p>
        <p>{{ $t('Price') }}: 4400 SEK</p>
      </div>
    </div>
    <div class="item-container" @click="openPopup(skaViGaOchBadaImg, $event)">
      <div class="item-img">
        <img :src="skaViGaOchBadaImg"
             alt='"Ska vi gå och bada" acrylic painting of seagulls at the beach by Anita Blom'>
      </div>
      <div class="item-info">
        <h3>Ska vi gå och bada</h3>
        <p>{{ $t('AcrylicPainting') }} 60x80</p>
        <p>{{ $t('Price') }}: 5600 SEK</p>
      </div>
    </div>
    <div class="item-container" @click="openPopup(tvaHjartanTvaHorisonterImg, $event)">
      <div class="item-img">
        <img :src="tvaHjartanTvaHorisonterImg"
             alt='"Två hjärtan, två horisonter" acrylic painting representing love and distant horizons by Anita Blom'>
      </div>
      <div class="item-info">
        <h3>Två hjärtan, två horisonter</h3>
        <p>{{ $t('AcrylicPainting') }} 60x60</p>
        <p>{{ $t('Price') }}: 4800 SEK</p>
      </div>
    </div>
    <div class="item-container" @click="openPopup(stormensDansImg, $event)">
      <div class="item-img">
        <img :src="stormensDansImg"
             alt='"Stormens dans" acrylic painting capturing the dynamic energy of a storm by Anita Blom'>
      </div>
      <div class="item-info">
        <h3>Stormens dans</h3>
        <p>{{ $t('AcrylicPainting') }} 38x45</p>
        <p>{{ $t('Price') }}: 3300 SEK</p>
      </div>
    </div>
    <div class="item-container" @click="openPopup(kraftenINaturensStillaDansImg, $event)">
      <div class="item-img">
        <img :src="kraftenINaturensStillaDansImg"
             alt='"Kraften i naturens stilla dans" acrylic painting illustrating the peaceful movement in nature by Anita Blom'>
      </div>
      <div class="item-info">
        <h3>Kraften i naturens stilla dans</h3>
        <p>{{ $t('AcrylicPainting') }} 45x55</p>
        <p>{{ $t('Price') }}: 4000 SEK</p>
      </div>
    </div>
    <div class="item-container" @click="openPopup(skargardensSerenadImg, $event)">
      <div class="item-img">
        <img :src="skargardensSerenadImg"
             alt='"Skärgårdens serenad" acrylic painting of a serene archipelago landscape by Anita Blom'>
      </div>
      <div class="item-info">
        <h3>Skärgårdens serenad</h3>
        <p>{{ $t('AcrylicPainting') }} 50x70</p>
        <p>{{ $t('Price') }}: 5000 SEK</p>
      </div>
    </div>
    <div class="item-container" @click="openPopup(kolibriImg, $event)">
      <div class="item-img">
        <img :src="kolibriImg"
             alt='"Kolibri" acrylic painting of a hummingbird by Anita Blom'>
      </div>
      <div class="item-info">
        <h3>{{ $t('Sold')}}</h3>
        <p>{{ $t('AcrylicPainting') }} 50x70</p>
        <p>{{ $t('Price') }}: 5000 SEK</p>
      </div>
    </div>


    <div v-if="showPopup" class="popup" @click="closePopup">
      <img :src="popupImageSrc" alt="Popup Image" class="popup-img" @click.stop/>
      <a :href="popupImageSrc" target="_blank" class="open-in-new-tab">{{ $t('OpenInNewTab') }}</a>
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
  margin-top: 2%;
  width: 100%;
  gap: 8px;

}

.art-row-item {
  max-width: 20%;
  display: flex;
  justify-content: center;
}

.art-row img {
  max-width: 100%;
  object-fit: contain;
}


.gallery-rows {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2%;
  width: 100%;
  margin-bottom: 5%;
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
  flex-direction: column;
  z-index: 10; /* Make sure it's above everything else */

}

.open-in-new-tab {
  position: absolute;
  bottom: 5%; /* Adjust based on your design */
  left: 50%;
  transform: translateX(-50%);
  color: white; /* Choose color that stands out */
  background-color: rgba(0, 0, 0, 0.7); /* Optional */
  padding: 5px;
  text-decoration: none;
  border-radius: 5px;
  font-size: 20px; /* Adjust based on your design */
}

/* Ensure the text is legible and stands out */
.open-in-new-tab:hover {
  color: #ccc; /* Lighter shade for hover effect */
  text-decoration: underline;
}

.popup-img {
  max-width: 80%;
  max-height: 80%;

}

@media only screen and (max-width: 850px) {
  .main-container {
    width: 100%;

  }

  .art-row {
    width: 95%;
  }

  .art-row-item {
    max-width: 40%;
    display: flex;
    justify-content: center;
  }

  .art-row img {
    max-width: 100%;
    object-fit: contain;
  }


  .item-container {
    flex-direction: row;
    align-items: center;
    width: 95%;
    margin-top: 10%;
    margin-left: 1%;
  }

}


</style>
