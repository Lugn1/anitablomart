<script setup>
import TheHeader from "./components/TheHeader.vue";
import Sidebar from "@/components/TheSidebar.vue";
import MobileHeader from "@/components/MobileHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <section class="main-container">
    <div class="main-header">
      <TheHeader></TheHeader>
    </div>
    <div class="mobile-header">
      <MobileHeader/>
      <Sidebar/>
    </div>
    <div class="view">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"/>
        </transition>
      </router-view>
    </div>
    <TheFooter></TheFooter>
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


@media only screen and (max-width: 428px) {

  h1 {
    font-size: 1.5em;
  }

  h2 {
    font-size: 1.2em;
  }

  .mobile-header {
    display: block;
  }

  .main-header {
    display: none;
  }
}

</style>
