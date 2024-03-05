<script setup>
import TheHeader from "./components/TheHeader.vue";
import Sidebar from "@/components/TheSidebar.vue";
import MobileHeader from "@/components/MobileHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
import BackToTop from "@/components/BackToTop.vue";
</script>

<template>
  <section class="main-container">
    <section class="main-header">
      <TheHeader></TheHeader>
    </section>
    <section class="mobile-header">
      <MobileHeader/>
      <Sidebar/>
    </section>
    <article class="view">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"/>
        </transition>
      </router-view>
    </article>
    <section class="footer">
    <TheFooter></TheFooter>
    </section>
    <BackToTop></BackToTop>
  </section>
</template>

<style>

.main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.view {
  display: flex;
  justify-content: center;
  margin-top: 1%;
}

.mobile-header {
  display: none;
}

.main-header {
  display: block;
}

h1 {
  font-size: 1.8em;
}

h2 {
  font-size: 1.5em;
}


@media only screen and (max-width: 850px ) {

  .mobile-header {
    display: block;
  }

  .main-header {
    display: none;

  }
}






</style>
