<script setup>
import Social from "@/components/SocialBar.vue";

import {useI18n} from "vue-i18n";

const { locale } = useI18n()
const setLanguage = (language) => {
  locale.value = language
}
</script>

<template>
  <div class="main-container" >
    <div class="top-container">
      <div class="signature-container">
        <img src="../assets/misc/signature.jpg" alt="Signature">
        <p id="signature-placeholder">Anita Blom Art</p>
      </div>
      <div class="social-container">
      <Social></Social>
      </div>
      <div  class="flags">
        <img
            :class="{ 'highlighted': $i18n.locale === 'sv' }"
            src="../assets/icons/sweden.png"
            alt="Swedish flag icon"
            @click="setLanguage('sv')"
        >
        <img
            :class="{ 'highlighted': $i18n.locale === 'en' }"
            src="../assets/icons/united-kingdom.png"
            alt="UK flag icon"
            @click="setLanguage('en')"
        >
      </div>
    </div>
    <div class="links-container">
      <div class="link-items">
        <router-link to="/" active-class="active-link">{{$t('Home')}}</router-link>
        <router-link to="/gallery" active-class="active-link">{{$t('Gallery')}}</router-link>
        <router-link to="/order" active-class="active-link">{{$t('Order works')}}</router-link>
        <router-link to="/blog" active-class="active-link">{{$t('Blog')}}</router-link>
        <router-link to="/about" active-class="active-link">{{$t('About')}}</router-link>
        <router-link to="/contact" active-class="active-link">{{$t('Contact')}}</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>


.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.main-container img {
  max-width: 100%;
  max-height: 100%;
  width: 40%;
  display: flex;
  justify-content: center;
  align-content: center;
  height: auto;
  object-fit: cover;
  object-position: bottom;
}

.social-container {
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
}

.top-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin-bottom: 1%;
}

#signature-placeholder {
  font-size: 2em;
  font-family: "Arsenal", sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.links-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  left: 0;
  background-color: rgba(40, 150, 60, 70%);
}

.link-items {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4%;
  width: 60%;
  margin: 1%;
}

.link-items a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-family: "Arsenal", sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  cursor: default;
}

.flags {
  display: flex;
  width: 80px;
  gap: 15%;

}

.flags img {
  cursor: pointer;
  width: 40%;
  height: auto;
  object-fit: contain;
}


.link-items .active-link {
  color: navy;
  text-decoration: underline;
}

.signature-container {
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  gap: 10%;
}


@media only screen and (max-width: 600px) {

  .container {
    height: 52%;
  }

  .links {
    flex-direction: row;
    gap: 15px;
    font-size: 32px;
    text-align: center;
    padding: 11px;
  }
}


</style>
