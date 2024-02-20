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
<!--        <img src="../assets/signature-placeholder.png" alt="Signature">-->
        <p id="signature-placeholder">Anita Blom Art</p>
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
  border-bottom: 2px solid rgba(30, 140, 60, 70%);
  margin-top: 5%;

}

.hamburger-menu {
  display: flex;
  justify-content: center;
  width: 10%;
  margin-left: 2%;
}



.content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.flags {
  display: flex;
  justify-content: center;
  width: 20%;
  gap: 15%;
  height: 100%;
  margin-right: 2%;

}

#signature-placeholder {
  font-size: 2em;
  font-family: "Arsenal", sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.signature-container {
  width: 100%;
  height: auto;
  object-fit: contain;
  display: flex;
  justify-content: center;
  margin-top: 2%;

}

.signature-container img {
  width: 60%;
  object-fit: contain;
}


.flags img {
  width: 30%;
  object-fit: cover;
}




</style>

