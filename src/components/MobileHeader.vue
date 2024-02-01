<script setup>
import Sidebar from "@/components/TheSidebar.vue";
import {toggleSidebarOn} from "@/components/state.js";
import {useI18n} from "vue-i18n";

const {locale} = useI18n()
const setLanguage = (language) => {
  locale.value = language
}

</script>

<template>
  <section class="main-container">
    <article class="content">
      <div class="hamburger-menu">
    <span class="collapse-hamb" @click="toggleSidebarOn">
  <i class="fa-solid fa-bars fa-xl"></i>
  </span>
      </div>
      <div class="signature-container">
        <img src="../assets/signature-placeholder.png" alt="Signature">
      </div>
      <div class="flags">
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
      <Sidebar/>
    </article>
    <div class="line"></div>
  </section>
</template>

<style scoped>

.main-container {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

}



.line {
  border-bottom: 5px solid rgba(30, 140, 60, 70%);
  margin-top: 3%;
  border-radius: 1%;
}

.content {
  width: 95%;
  display: flex;
  align-items: center;
  flex-direction: row;
}

.flags {
  display: flex;
  gap: 15%;
  width: 10%;
  height: 100%;

}

.signature-container {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: flex;
  justify-content: center;

}

.signature-container img {
  width: 60%;
  object-fit: contain;
}


.flags img {
  width: auto;
  max-height: 25px;
  object-fit: cover;
}

</style>
