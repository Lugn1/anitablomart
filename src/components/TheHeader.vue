<script setup>
import { ref } from 'vue';
import Social from "@/components/SocialBar.vue";
import i18n from '@/i18n.js';



const swedishFlagClicked = ref(i18n.locale === 'sv');
const englishFlagClicked = ref(i18n.locale === 'en');

const setLanguageToSwedish = () => {
  i18n.locale = 'sv';
  console.log('Swedish flag clicked');
  swedishFlagClicked.value = true;
  englishFlagClicked.value = false;

};

const setLanguageToEnglish = () => {
  i18n.locale = 'en';
  console.log('English flag clicked');
  englishFlagClicked.value = true;
  swedishFlagClicked.value = false;

};

defineExpose({ setLanguageToSwedish, setLanguageToEnglish });

</script>

<template>
  <div class="main-container" >
    <div class="top-container">
      <div class="signature-container">
        <img src="../assets/signature-placeholder.png" alt="Signature">
      </div>
      <Social></Social>
      <div class="flags">
        <img :class="{ 'highlighted': swedishFlagClicked }" src="../assets/icons/sweden.png" alt="Swedish flag icon" @click="setLanguageToSwedish">
        <img :class="{ 'highlighted': englishFlagClicked }" src="../assets/icons/united-kingdom.png" alt="UK flag icon" @click="setLanguageToEnglish">
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

.highlighted {
  box-shadow: 0 0 10px rgba(30, 140, 60, 70%); ; /* Change as needed */
}
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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

.top-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin-bottom: 1%;
}

.links-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100.9%;
  left: 0;
  background-color: rgba(30, 140, 60, 70%);
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
}

.flags {
  display: flex;
  width: 6%;
  gap: 15%;
}

.link-items .active-link {
  color: navy;
  text-decoration: underline;
}

.signature-container {
  width: 40%;
  height: auto;
  object-fit: contain;
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
