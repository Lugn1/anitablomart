<script setup>
import TheHeader from "./components/TheHeader.vue";

</script>

<template>
  <div class="main-container">
    <TheHeader></TheHeader>
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
}

.view {
  display: flex;
  justify-content: center;
  margin-top: 14%;

}
router-view {
}

</style>
