<script setup>
import TheHeader from "./components/TheHeader.vue";
import Sidebar from "@/components/TheSidebar.vue";
import MobileHeader from "@/components/MobileHeader.vue";
</script>

<template>
  <div class="main-container">
  <div class="main-header">
    <TheHeader></TheHeader>
    </div>
    <div class="mobile-header">
       <MobileHeader />
    </div>

    <Sidebar/>
    <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

.main-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 6px;
}

.view {
  display: flex;
  justify-content: center;
}
router-view {
}

.mobile-header{
display: none;
}
.main-header{
  display: block;
}

@media only screen and (max-width: 428px) {

  .mobile-header {
    display: block;
  }
  .main-header{
    display: none;
  }
}

</style>
