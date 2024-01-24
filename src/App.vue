<script setup>
import TheHeader from "./components/TheHeader.vue";
import Sidebar from "@/components/TheSidebar.vue";
import MobileHeader from "@/components/MobileHeader.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <div class="main-container">
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
  </div>
</template>

<style>

.main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 6px;
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.view {
  display: flex;
  justify-content: center;
}

.mobile-header {
  display: none;
}

.main-header {
  display: block;
}


@media only screen and (max-width: 428px) {

  .mobile-header {
    display: block;
    margin-top: 5%;
    margin-left: 5%;
    height: 32px;
    width: 32px;

  }

  .main-header {
    display: none;
  }
}

</style>
